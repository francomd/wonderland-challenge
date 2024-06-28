import { useReducer } from 'react';

export type TMessage = {
  text: string;
  visible: boolean;
};

export type TMessages = 'invalidAddress' | 'insufficientBalance';

export type TMessagesMap = {
  [key in TMessages]: TMessage;
};

export const initialArg: TMessagesMap = {
  invalidAddress: {
    text: 'Invalid address',
    visible: false,
  },
  insufficientBalance: {
    text: 'Insufficient balance',
    visible: false,
  },
};

export const useAlertMessage = () => {
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
export const AlertMessage = ({ messages }: { messages: TMessagesMap }) => {
  const messagesArr = [...(Object.keys(messages) as TMessages[])];

  return (
    <div>
      {messagesArr.map((message) => messages[message]?.visible && (
        <p key={message}>
          <strong>Error:</strong>
          <span>{messages[message]?.text}</span>
        </p>
      ))}
    </div>
  );
};
