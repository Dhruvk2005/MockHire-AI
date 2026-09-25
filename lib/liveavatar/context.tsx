
"use client";

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

import {
  ConnectionQuality,
  LiveAvatarSession,
  SessionEvent,
  SessionState,
  VoiceChatConfig,
} from "@heygen/liveavatar-web-sdk";

type LiveAvatarContextProps = {
  sessionRef: React.RefObject<LiveAvatarSession | null>;

  sessionState: SessionState;

  isStreamReady: boolean;

  connectionQuality: ConnectionQuality;
};

const LiveAvatarContext =
  createContext<LiveAvatarContextProps>({
    sessionRef: {
      current: null,
    },

    sessionState:
      SessionState.DISCONNECTED,

    isStreamReady: false,

    connectionQuality:
      ConnectionQuality.UNKNOWN,
  });

type LiveAvatarContextProviderProps = {
  children: React.ReactNode;

  sessionAccessToken: string;

  voiceChatConfig?: VoiceChatConfig;
};

export const LiveAvatarContextProvider = ({
  children,
  sessionAccessToken,
  voiceChatConfig = {},
}: LiveAvatarContextProviderProps) => {
  const sessionRef =
    useRef<LiveAvatarSession | null>(null);

  const [sessionState, setSessionState] =
    useState<SessionState>(
      SessionState.INACTIVE
    );

  const [isStreamReady, setIsStreamReady] =
    useState(false);

  const [
    connectionQuality,
    setConnectionQuality,
  ] = useState<ConnectionQuality>(
    ConnectionQuality.UNKNOWN
  );

  /*
   * Create LiveAvatar session
   */
  useEffect(() => {
    if (!sessionAccessToken) return;

    const session =
      new LiveAvatarSession(
        sessionAccessToken,
        {
          voiceChat: voiceChatConfig,

          autoKeepAlive: true,
        }
      );

    sessionRef.current = session;

    /*
     * Session state
     */
    const handleStateChange = (
      state: SessionState
    ) => {
      console.log(
        "LIVEAVATAR STATE:",
        state
      );

      setSessionState(state);

      if (
        state ===
        SessionState.DISCONNECTED
      ) {
        setIsStreamReady(false);
      }
    };

    /*
     * Stream ready
     */
    const handleStreamReady = () => {
      console.log(
        "LIVEAVATAR STREAM READY"
      );

      setIsStreamReady(true);
    };

    /*
     * Connection quality
     */
    const handleConnectionQuality = (
      quality: ConnectionQuality
    ) => {
      setConnectionQuality(quality);
    };

    session.on(
      SessionEvent.SESSION_STATE_CHANGED,
      handleStateChange
    );

    session.on(
      SessionEvent.SESSION_STREAM_READY,
      handleStreamReady
    );

    session.on(
      SessionEvent.SESSION_CONNECTION_QUALITY_CHANGED,
      handleConnectionQuality
    );

    /*
     * Start session
     */
    session
      .start()
      .catch((error) => {
        console.error(
          "Failed to start LiveAvatar:",
          error
        );
      });

    /*
     * Cleanup
     */
    return () => {
      session
        .stop()
        .catch((error) => {
          console.error(
            "Failed to stop LiveAvatar:",
            error
          );
        });

      session.removeAllListeners();

      sessionRef.current = null;
    };
  }, [
    sessionAccessToken,
    voiceChatConfig,
  ]);

  return (
    <LiveAvatarContext.Provider
      value={{
        sessionRef,
        sessionState,
        isStreamReady,
        connectionQuality,
      }}
    >
      {children}
    </LiveAvatarContext.Provider>
  );
};

export const useLiveAvatarContext =
  () => {
    return useContext(
      LiveAvatarContext
    );
  };

