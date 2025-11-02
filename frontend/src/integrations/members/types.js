export interface Member {
  id: string;
  email?: string;
  name?: string;
  imageUrl?: string;
  loginEmail?: string;
}

export interface MemberState {
  member: Member | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

export interface MemberActions {
  loadCurrentMember: () => Promise<void>;
  login: () => void;
  logout: () => void;
  clearMember: () => void;
}

export interface MemberContextType extends MemberState {
  actions: MemberActions;
}
