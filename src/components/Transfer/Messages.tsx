import { useReducer } from 'react';

export type TMessage = {
  type: 'error' | 'success';
  text: string;
  visible: boolean;
};

export type TMessages =
  | 'invalidAddress'
  | 'insufficientBalance'
  | 'approved'
  | 'transfered';

export type TMessagesMap = {
  [key in TMessages]: TMessage;
};

export const initialArg: TMessagesMap = {
  invalidAddress: {
    type: 'error',
    text: 'Invalid address',
    visible: false,
  },
  insufficientBalance: {
    type: 'error',
    text: 'Insufficient balance',
    visible: false,
  },
  approved: {
    type: 'success',
    text: 'Approved',
    visible: false,
  },
  transfered: {
    type: 'success',
    text: 'Transfered',
    visible: false,
  },
};

export const useMessages = () => {
  const reducer = (state: TMessagesMap,
    action: { [key in TMessages]?: boolean }) => {
    return (Object.keys(state) as TMessages[]).reduce((acc, key) => {
      acc[key] = {
        ...state[key],
        visible: action[key] ?? state[key].visible,
      };
      return acc;
    }, {} as TMessagesMap);
  };

  const init = (initialArg: TMessagesMap) => {
    return initialArg;
  };

  const [messages, dispatchMessage] = useReducer(
    reducer, initialArg, init,
  );

  return {
    messages,
    dispatchMessage,
  };
};
export const MessagesAlert = ({ messages }: { messages: TMessagesMap }) => {
  const messagesArr = [...(Object.keys(messages) as TMessages[])];

  return (
    <div>
      {messagesArr.map((message) => messages[message]?.visible && (
        <p key={message}>
          <strong>{messages[message]?.type.toUpperCase()}:</strong>
          <span>{messages[message]?.text}</span>
        </p>
      ))}
    </div>
  );
};
