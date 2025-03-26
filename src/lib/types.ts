export interface DashboardList {
  id: number;
  title: string;
  color: "#7AC555" | "#760DDE" | "#FFA500" | "#76A6EA" | "#E876EA";
  userId: number;
  createdAt: string;
  updatedAt: string;
  createdByMe: boolean;
}

export interface DashboardDetail {
  id: number;
  title: string;
  color: "#7AC555" | "#760DDE" | "#FFA500" | "#76A6EA" | "#E876EA";
  createdAt: string;
  updatedAt: string;
  userId: number;
  createdByMe: boolean;
}

export interface DashboardMember {
  id: number;
  email: string;
  nickname: string;
  profileImageUrl: string | null;
  createdAt: string;
  updatedAt: string;
  isOwner: boolean;
  userId: number;
}

export interface DashboardColumn {
  id: number;
  title: string;
  teamId: string;
  dashboardId: number;
  createdAt: string;
  updatedAt: string;
}

export interface DashboardMember {
  id: number;
  email: string;
  nickname: string;
  profileImageUrl: string | null;
  createdAt: string;
  updatedAt: string;
  isOwner: boolean;
  userId: number;
}
