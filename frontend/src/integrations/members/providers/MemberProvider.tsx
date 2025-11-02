import React, { useState, useCallback, ReactNode } from 'react';
import { MemberContext } from './MemberContext';
import { MemberState, MemberActions } from '../types';

const MEMBER_STORAGE_KEY = 'member-store';

interface MemberProviderProps {
  children: ReactNode;
}

export const MemberProvider: React.FC<MemberProviderProps> = ({ children }) => {
  const [state, setState] = useState<MemberState>({
    member: null,
    isAuthenticated: false,
    isLoading: false,
    error: null,
  });

  const updateState = useCallback((updates: Partial<MemberState>) => {
    setState(prev => ({ ...prev, ...updates }));
  }, []);

  const actions: MemberActions = {
    loadCurrentMember: useCallback(async () => {
      // Mock implementation - no actual authentication
      updateState({ isLoading: false, isAuthenticated: false, member: null });
    }, [updateState]),

    login: useCallback(() => {
      console.log('Login functionality not implemented');
    }, []),

    logout: useCallback(() => {
      if (typeof window !== 'undefined') {
        try {
          localStorage.removeItem(MEMBER_STORAGE_KEY);
        } catch (error) {
          console.error('Error clearing member state:', error);
        }
      }
      updateState({
        member: null,
        isAuthenticated: false,
        isLoading: false,
        error: null,
      });
    }, [updateState]),

    clearMember: useCallback(() => {
      updateState({
        member: null,
        isAuthenticated: false,
        isLoading: false,
        error: null,
      });
    }, [updateState]),
  };

  const contextValue = {
    ...state,
    actions,
  };

  return (
    <MemberContext.Provider value={contextValue}>
      {children}
    </MemberContext.Provider>
  );
};
