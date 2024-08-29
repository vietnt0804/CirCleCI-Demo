export const ACCESS_TOKEN = 'token'

export const STATUS_CODE = {
  HTTP_SUCCESS: 200,
  HTTP_UNAUTHORIZED: 401,
  HTTP_FORBIDDEN: 403,
  HTTP_BAD_REQUEST: 400,
  HTTP_UNPROCESSABLE_ENTITY: 422,
  HTTP_NOT_FOUND: 404,
  HTTP_NOT_ACCEPTABLE: 406,
  HTTP_INTERNAL_SERVER_ERROR: 500
}

export const RouteURL = {
  HOME: '/',
  DASHBOARD: '/dashboard',
  RISK_PROFILE: '/risk-profile',
  FINANCES: '/finances',
  ASSET_STRUCTURE: '/asset-structure',
  CASH_FLOW: '/cash-flow',
  NET_WORTH: '/net-worth',
  FINANCIAL_PLAN: '/financial-plan',
  EXPERT_ADVICE: '/expert-advice'
}

interface MenuItem {
  id: string
  label: string
  icon: string
  to: string
}

export const menuItems: MenuItem[] = [
  { id: 'home', label: 'Trang chủ', icon: 'fas fa-home', to: RouteURL.HOME },
  { id: 'risk-profile', label: 'Hồ sơ rủi ro', icon: 'fas fa-user-shield', to: RouteURL.RISK_PROFILE },
  { id: 'finances', label: 'Tài chính của bạn', icon: 'fas fa-wallet', to: RouteURL.FINANCES },
  { id: 'asset-structure', label: 'Cơ cấu tài sản', icon: 'fas fa-chart-pie', to: RouteURL.ASSET_STRUCTURE },
  { id: 'cash-flow', label: 'Dòng tiền năm', icon: 'fas fa-money-bill-wave', to: RouteURL.CASH_FLOW },
  { id: 'net-worth', label: 'Tài sản ròng', icon: 'fas fa-balance-scale', to: RouteURL.NET_WORTH },
  { id: 'financial-plan', label: 'Kế hoạch tài chính', icon: 'fas fa-tasks', to: RouteURL.FINANCIAL_PLAN },
  { id: 'expert-advice', label: 'Khuyến nghị từ chuyên gia', icon: 'fas fa-user-tie', to: RouteURL.EXPERT_ADVICE }
]
