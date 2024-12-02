'use client';
import {
  ActiveLogin,
  AdvertisingSettings,
  EmailAccessSettings,
  InvoiceSettings,
  MembershipPlans,
  NotificationSettings,
  OrganizationSettings,
  PaymentMethodSettings,
  ResetPasswordSettings,
  StatementSettings,
  TeamSettings,
  TwoFactorAuth,
} from '@app/_components/user/settings';

const options: any = {
  team: TeamSettings,
  'login-devices': ActiveLogin,
  organizations: OrganizationSettings,
  emails: EmailAccessSettings,
  'reset-password': ResetPasswordSettings,
  '2-factor-auth': TwoFactorAuth,
  'membership-plans': MembershipPlans,
  'payment-methods': PaymentMethodSettings,
  invoices: InvoiceSettings,
  statements: StatementSettings,
  advertising: AdvertisingSettings,
  notifications: NotificationSettings,
};
type Params = { slug: string };

const SettingLayoutOptions = ({ params }: { params: Params }) => {
  const { slug } = params;
  const SettingComponent = options[slug];
  return <SettingComponent />;
};

export default SettingLayoutOptions;
