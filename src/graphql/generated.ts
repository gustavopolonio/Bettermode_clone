import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  Upload: { input: any; output: any; }
};

export type AccessGroup = {
  __typename?: 'AccessGroup';
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  entityId: Scalars['ID']['output'];
  entityType: AccessGroupEntityType;
  id: Scalars['ID']['output'];
  info?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  networkId: Scalars['ID']['output'];
  type: Scalars['String']['output'];
};

export enum AccessGroupEntityType {
  Network = 'network',
  Post = 'post',
  Space = 'space'
}

export type Action = {
  __typename?: 'Action';
  status: ActionStatus;
};

export type ActionPermissions = {
  __typename?: 'ActionPermissions';
  inputPermissions: Array<InputPathPermissions>;
  isAuthorized: IsAuthorized;
  name: Scalars['String']['output'];
  outputPermissions: Array<PathPermissions>;
};

export enum ActionStatus {
  Failed = 'failed',
  Succeeded = 'succeeded'
}

export type ActiveSso = {
  __typename?: 'ActiveSso';
  logoutUrl?: Maybe<Scalars['String']['output']>;
  settingsUrl?: Maybe<Scalars['String']['output']>;
};

export type AddAppCollaboratorInput = {
  email: Scalars['String']['input'];
};

export type AddMediasInput = {
  contentTypes: Array<Scalars['String']['input']>;
};

export type AddNetworkInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  domain?: InputMaybe<Scalars['String']['input']>;
  entrancePage?: InputMaybe<Scalars['String']['input']>;
  faviconId?: InputMaybe<Scalars['String']['input']>;
  gclid?: InputMaybe<Scalars['String']['input']>;
  industry?: InputMaybe<NetworkIndustryType>;
  name: Scalars['String']['input'];
  owner: JoinNetworkInput;
  primaryMembers?: InputMaybe<NetworkPrimaryMembersType>;
  promoCode?: InputMaybe<Scalars['String']['input']>;
  referrer?: InputMaybe<Scalars['String']['input']>;
  timeframe?: InputMaybe<NetworkTimeframeType>;
  utmCampaign?: InputMaybe<Scalars['String']['input']>;
  utmContent?: InputMaybe<Scalars['String']['input']>;
  utmMedium?: InputMaybe<Scalars['String']['input']>;
  utmSource?: InputMaybe<Scalars['String']['input']>;
  utmTerm?: InputMaybe<Scalars['String']['input']>;
  visibility?: NetworkVisibility;
};

export type AddReactionInput = {
  overrideSingleChoiceReactions?: InputMaybe<Scalars['Boolean']['input']>;
  participantId?: InputMaybe<Scalars['ID']['input']>;
  reaction: Scalars['String']['input'];
};

export type AddSpaceMemberInput = {
  memberId: Scalars['ID']['input'];
  roleId?: InputMaybe<Scalars['ID']['input']>;
};

export type AddTrialInput = {
  endDate: Scalars['DateTime']['input'];
};

export type AddonInformation = {
  __typename?: 'AddonInformation';
  priceId: Scalars['String']['output'];
  productId: Scalars['String']['output'];
  quantity: Scalars['Float']['output'];
};

export type AnalyticsLimits = {
  __typename?: 'AnalyticsLimits';
  planLimits: Array<AnalyticsPlanLimits>;
};

export type AnalyticsPlanLimits = {
  __typename?: 'AnalyticsPlanLimits';
  daysLimitation?: Maybe<Scalars['Float']['output']>;
  plan: PlanName;
};

export type AnalyticsQueryTimeframe = {
  __typename?: 'AnalyticsQueryTimeframe';
  from: Scalars['Float']['output'];
  to: Scalars['Float']['output'];
};

export type AnalyticsResponse = {
  __typename?: 'AnalyticsResponse';
  maxCacheTime: Scalars['Float']['output'];
  query: Scalars['String']['output'];
  records: Array<ReportRecord>;
  timeframe: AnalyticsQueryTimeframe;
};

export type ApiRateLimitStat = {
  __typename?: 'ApiRateLimitStat';
  consumableType: ApiRequestLimitType;
  consumedPoints: Scalars['Float']['output'];
  duration: Scalars['Float']['output'];
  limit: Scalars['Float']['output'];
  remainingPoints: Scalars['Float']['output'];
  resetsAt: Scalars['DateTime']['output'];
};

export type ApiRequestLimit = {
  __typename?: 'ApiRequestLimit';
  consumableType: ApiRequestLimitType;
  duration: Scalars['Float']['output'];
  limit: Scalars['Float']['output'];
};

export enum ApiRequestLimitType {
  Complexity = 'Complexity',
  Request = 'Request'
}

export type App = {
  __typename?: 'App';
  about?: Maybe<Scalars['String']['output']>;
  authMemberInstallation?: Maybe<AppInstallation>;
  authorName?: Maybe<Scalars['String']['output']>;
  authorUrl?: Maybe<Scalars['String']['output']>;
  banner?: Maybe<Media>;
  bannerId?: Maybe<Scalars['ID']['output']>;
  clientId?: Maybe<Scalars['String']['output']>;
  clientSecret?: Maybe<Scalars['String']['output']>;
  comingSoon: Scalars['Boolean']['output'];
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Member>;
  createdById?: Maybe<Scalars['ID']['output']>;
  customCodes?: Maybe<AppCustomCodes>;
  description?: Maybe<Scalars['String']['output']>;
  docsUrl?: Maybe<Scalars['String']['output']>;
  dynamicBlocks?: Maybe<Array<DynamicBlock>>;
  embedIds: Array<Scalars['ID']['output']>;
  embeds?: Maybe<Array<Embed>>;
  /** @deprecated Apps will be only installed on the network level */
  enabledContexts?: Maybe<Array<PermissionContext>>;
  favicon?: Maybe<Media>;
  faviconId?: Maybe<Scalars['ID']['output']>;
  federatedSearchEnabled: Scalars['Boolean']['output'];
  globalBanner?: Maybe<Media>;
  globalEmbeds?: Maybe<Array<Embed>>;
  globalFavicon?: Maybe<Media>;
  globalImage?: Maybe<Media>;
  globalImages?: Maybe<Array<Media>>;
  /** @deprecated Use the global gateway instead */
  globalNetwork?: Maybe<PluralNetwork>;
  id: Scalars['ID']['output'];
  image?: Maybe<Media>;
  imageId?: Maybe<Scalars['ID']['output']>;
  imageIds: Array<Scalars['ID']['output']>;
  images?: Maybe<Array<Media>>;
  installed?: Maybe<Scalars['Boolean']['output']>;
  locked: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  network?: Maybe<Network>;
  networkId: Scalars['ID']['output'];
  privacyPolicyUrl?: Maybe<Scalars['String']['output']>;
  privatelyPublished?: Maybe<Scalars['Boolean']['output']>;
  requiredPermissions: Array<PrimaryScopes>;
  requiredPlan?: Maybe<PlanName>;
  secretToken?: Maybe<Scalars['String']['output']>;
  settingsBlock?: Maybe<DynamicBlock>;
  slug: Scalars['String']['output'];
  standing: StoreItemStanding;
  status: StoreItemStatus;
  termsOfServiceUrl?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  updatedBy?: Maybe<Member>;
  updatedById?: Maybe<Scalars['ID']['output']>;
  webhookSignSecret?: Maybe<Scalars['String']['output']>;
  webhookSubscriptions?: Maybe<Array<Scalars['String']['output']>>;
  webhookUrl?: Maybe<Scalars['String']['output']>;
};

export type AppAction = {
  __typename?: 'AppAction';
  data?: Maybe<Scalars['String']['output']>;
  status: ActionStatus;
};

export type AppCollaborator = {
  __typename?: 'AppCollaborator';
  addedById?: Maybe<Scalars['ID']['output']>;
  /** @deprecated Use the global gateway instead */
  app?: Maybe<App>;
  appId: Scalars['ID']['output'];
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  type: AppCollaboratorType;
};

export enum AppCollaboratorType {
  Collaborator = 'COLLABORATOR',
  Owner = 'OWNER'
}

export type AppCustomCodes = {
  __typename?: 'AppCustomCodes';
  body?: Maybe<Scalars['String']['output']>;
  head?: Maybe<Scalars['String']['output']>;
};

export type AppEdge = {
  __typename?: 'AppEdge';
  cursor: Scalars['String']['output'];
  node: App;
};

export type AppInstallation = {
  __typename?: 'AppInstallation';
  app?: Maybe<App>;
  appVersion?: Maybe<Scalars['String']['output']>;
  /** @deprecated Apps will be only installed on the network level */
  context?: Maybe<PermissionContext>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  installedAt: Scalars['DateTime']['output'];
  installedBy?: Maybe<Member>;
  network?: Maybe<Network>;
  permissions: Array<Scalars['String']['output']>;
  status: AppInstallationStatus;
  templatesMappings?: Maybe<AppInstallationTemplatesMappings>;
  updatedAt: Scalars['DateTime']['output'];
};

export type AppInstallationEdge = {
  __typename?: 'AppInstallationEdge';
  cursor: Scalars['String']['output'];
  node: AppInstallation;
};

export enum AppInstallationStatus {
  Deleted = 'DELETED',
  Disabled = 'DISABLED',
  Enabled = 'ENABLED'
}

export type AppInstallationTemplatesMappings = {
  __typename?: 'AppInstallationTemplatesMappings';
  member?: Maybe<Array<TemplatesMapping>>;
  postTypes?: Maybe<Array<TemplatesMapping>>;
};

export type AppInstallationTemplatesMappingsInput = {
  memberTypes?: InputMaybe<Array<TemplatesMappingInput>>;
  postTypes?: InputMaybe<Array<TemplatesMappingInput>>;
};

export type AppInteraction = {
  __typename?: 'AppInteraction';
  appId: Scalars['String']['output'];
  interactionId: Scalars['String']['output'];
  props?: Maybe<Scalars['String']['output']>;
  slate?: Maybe<Slate>;
  type: AppInteractionType;
};

export enum AppInteractionType {
  Close = 'Close',
  Data = 'Data',
  OpenModal = 'OpenModal',
  OpenToast = 'OpenToast',
  Redirect = 'Redirect',
  Reload = 'Reload',
  Show = 'Show'
}

export type AppPublication = {
  __typename?: 'AppPublication';
  addedById?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  itemId: Scalars['String']['output'];
  networkId: Scalars['String']['output'];
};

export type AppSetting = {
  __typename?: 'AppSetting';
  appId: Scalars['String']['output'];
  context: PermissionContext;
  entityId?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  networkId: Scalars['String']['output'];
  settings: Scalars['String']['output'];
};

export type AppToken = {
  __typename?: 'AppToken';
  accessToken: Scalars['String']['output'];
  gatewayUrl?: Maybe<Scalars['String']['output']>;
};

export type AssignOrRevokeBadgeInput = {
  memberId: Scalars['String']['input'];
};

export type AuthInfoWithOtp = {
  __typename?: 'AuthInfoWithOtp';
  member: Member;
  network: Network;
  otp: Scalars['String']['output'];
  role?: Maybe<Role>;
};

export type AuthToken = {
  __typename?: 'AuthToken';
  accessToken: Scalars['String']['output'];
  member: Member;
  network?: Maybe<Network>;
  networkPublicInfo: NetworkPublicInfo;
  refreshToken: Scalars['String']['output'];
  role: Role;
};

export type AuthTokenWithOtp = {
  __typename?: 'AuthTokenWithOtp';
  accessToken: Scalars['String']['output'];
  member: Member;
  network?: Maybe<Network>;
  networkPublicInfo: NetworkPublicInfo;
  otp: Scalars['String']['output'];
  refreshToken: Scalars['String']['output'];
  role: Role;
};

export type Badge = {
  __typename?: 'Badge';
  active: Scalars['Boolean']['output'];
  backgroundColor?: Maybe<Scalars['String']['output']>;
  daysUntilExpired?: Maybe<Scalars['Float']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<Media>;
  imageId?: Maybe<Scalars['ID']['output']>;
  longDescription?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  networkId: Scalars['ID']['output'];
  settings?: Maybe<Array<BadgeSettings>>;
  shortDescription: Scalars['String']['output'];
  text?: Maybe<Scalars['String']['output']>;
  textColor?: Maybe<Scalars['String']['output']>;
  type: BadgeType;
};

export type BadgeSettings = {
  __typename?: 'BadgeSettings';
  key: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type BadgeSettingsInput = {
  key: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export enum BadgeType {
  Manual = 'Manual',
  NewMember = 'NewMember',
  Role = 'Role',
  SuspendedMember = 'SuspendedMember'
}

export type BaseCustomFieldSchema = {
  __typename?: 'BaseCustomFieldSchema';
  archived?: Maybe<Scalars['Boolean']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  externalKeys?: Maybe<Array<Scalars['String']['output']>>;
  items?: Maybe<BaseCustomFieldSchema>;
  key: Scalars['String']['output'];
  name: Scalars['String']['output'];
  properties?: Maybe<Array<BaseCustomFieldSchema>>;
  required?: Maybe<Scalars['Boolean']['output']>;
  type: CustomFieldType;
  typeOptions?: Maybe<CustomFieldTypeOptions>;
  validators?: Maybe<Array<CustomFieldValidator>>;
};

export type BaseCustomFieldSchemaInput = {
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  externalKeys?: InputMaybe<Array<Scalars['String']['input']>>;
  items?: InputMaybe<BaseCustomFieldSchemaInput>;
  key: Scalars['String']['input'];
  name: Scalars['String']['input'];
  properties?: InputMaybe<Array<BaseCustomFieldSchemaInput>>;
  required?: InputMaybe<Scalars['Boolean']['input']>;
  type: CustomFieldType;
  typeOptions?: InputMaybe<CustomFieldTypeOptionsInput>;
  validators?: InputMaybe<Array<CustomFieldValidatorInput>>;
};

export type Basket = {
  __typename?: 'Basket';
  items?: Maybe<Array<BasketItem>>;
  promoErrorMessage?: Maybe<Scalars['String']['output']>;
  renewalType: PlanRenewalType;
  total?: Maybe<Price>;
};

export type BasketItem = {
  __typename?: 'BasketItem';
  note?: Maybe<Scalars['String']['output']>;
  promoCodeItem?: Maybe<Scalars['Boolean']['output']>;
  title: Scalars['String']['output'];
  value: Price;
};

export type BasketsInput = {
  name: PlanName;
  promotionCode?: InputMaybe<Scalars['String']['input']>;
  seats: Scalars['Int']['input'];
};

export type BillingAddress = {
  __typename?: 'BillingAddress';
  city?: Maybe<Scalars['String']['output']>;
  country: Scalars['String']['output'];
  postalCode?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  streetAddress?: Maybe<Scalars['String']['output']>;
};

export type BillingAddressInput = {
  city?: InputMaybe<Scalars['String']['input']>;
  country: Scalars['String']['input'];
  postalCode?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  streetAddress?: InputMaybe<Scalars['String']['input']>;
};

export type BillingDetails = {
  __typename?: 'BillingDetails';
  address?: Maybe<BillingAddress>;
  billingEmail?: Maybe<Scalars['String']['output']>;
  card?: Maybe<CardPublicInformation>;
  companyName?: Maybe<Scalars['String']['output']>;
  vat?: Maybe<Vat>;
};

export type BillingDetailsInput = {
  address?: InputMaybe<BillingAddressInput>;
  billingEmail?: InputMaybe<Scalars['String']['input']>;
  card?: InputMaybe<CardInput>;
  companyName?: InputMaybe<Scalars['String']['input']>;
  vat?: InputMaybe<VatInput>;
};

export type BillingPortalSession = {
  __typename?: 'BillingPortalSession';
  url: Scalars['String']['output'];
};

export type BillingPrice = {
  __typename?: 'BillingPrice';
  amount: Scalars['Float']['output'];
  default: Scalars['Boolean']['output'];
  id: Scalars['String']['output'];
  interval: BillingPriceInterval;
};

export enum BillingPriceInterval {
  Month = 'Month',
  Year = 'Year'
}

export type BillingProduct = {
  __typename?: 'BillingProduct';
  app?: Maybe<App>;
  appId?: Maybe<Scalars['String']['output']>;
  categories: Array<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  downgradable: Scalars['Boolean']['output'];
  features: Array<Scalars['String']['output']>;
  hubContent?: Maybe<HubContent>;
  hubContentId?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  imageUrls: Array<Scalars['String']['output']>;
  isEnterprise: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  order?: Maybe<Scalars['Float']['output']>;
  popular: Scalars['Boolean']['output'];
  prices: Array<BillingPrice>;
  public: Scalars['Boolean']['output'];
  purchasable: Scalars['Boolean']['output'];
  purchaseLimit?: Maybe<Scalars['Float']['output']>;
  requiredPlanOrder?: Maybe<Scalars['Float']['output']>;
};

export type BillingProducts = {
  __typename?: 'BillingProducts';
  addons: Array<BillingProduct>;
  plans: Array<BillingProduct>;
};

export type BillingSubscription = {
  __typename?: 'BillingSubscription';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  status: SubscriptionStatus;
  updatedAt: Scalars['DateTime']['output'];
};

export type Block = {
  __typename?: 'Block';
  children?: Maybe<Scalars['String']['output']>;
  extraProps?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  output?: Maybe<Scalars['String']['output']>;
  props?: Maybe<Scalars['String']['output']>;
};

export type BlockInput = {
  children?: InputMaybe<Scalars['String']['input']>;
  extraProps?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
  output?: InputMaybe<Scalars['String']['input']>;
  props?: InputMaybe<Scalars['String']['input']>;
};

export type By = Member;

export enum CallbackAction {
  Insert = 'Insert',
  Modal = 'Modal',
  None = 'None',
  Replace = 'Replace'
}

export type CallbackResponse = {
  __typename?: 'CallbackResponse';
  action: CallbackAction;
  slate?: Maybe<Slate>;
  toast?: Maybe<Toast>;
};

export type CaptchaSettings = {
  __typename?: 'CaptchaSettings';
  enabled: Scalars['Boolean']['output'];
  secretKey?: Maybe<Scalars['String']['output']>;
  siteKey?: Maybe<Scalars['String']['output']>;
};

export type CaptchaSettingsInput = {
  enabled: Scalars['Boolean']['input'];
  secretKey?: InputMaybe<Scalars['String']['input']>;
  siteKey?: InputMaybe<Scalars['String']['input']>;
};

export type CardInput = {
  cardNumber: Scalars['String']['input'];
  cvc: Scalars['String']['input'];
  expirationMonth: Scalars['Float']['input'];
  expirationYear: Scalars['Float']['input'];
  nameOnCard?: InputMaybe<Scalars['String']['input']>;
};

export type CardPublicInformation = {
  __typename?: 'CardPublicInformation';
  expirationMonth: Scalars['Float']['output'];
  expirationYear: Scalars['Float']['output'];
  lastFourDigits: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type ChartData = {
  __typename?: 'ChartData';
  label: Scalars['String']['output'];
  points: Scalars['String']['output'];
  value?: Maybe<Scalars['String']['output']>;
};

export type ClientApiUsage = {
  __typename?: 'ClientApiUsage';
  clientId: Scalars['String']['output'];
  clientName?: Maybe<Scalars['String']['output']>;
  value: Scalars['Float']['output'];
};

export type Collection = {
  __typename?: 'Collection';
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Member>;
  customOrderingIndex: Scalars['Float']['output'];
  description?: Maybe<Scalars['String']['output']>;
  externalId?: Maybe<Scalars['ID']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  network?: Maybe<Network>;
  relativeUrl?: Maybe<Scalars['String']['output']>;
  slug: Scalars['String']['output'];
  spaces?: Maybe<PaginatedSpace>;
  updatedAt: Scalars['DateTime']['output'];
  url?: Maybe<Scalars['String']['output']>;
};


export type CollectionSpacesArgs = {
  exploreOnly?: InputMaybe<Scalars['Boolean']['input']>;
  limit: Scalars['Int']['input'];
  memberId?: InputMaybe<Scalars['ID']['input']>;
};

export type CollectionEdge = {
  __typename?: 'CollectionEdge';
  cursor: Scalars['String']['output'];
  node: Collection;
};

export enum CollectionListOrderByEnum {
  CreatedAt = 'CREATED_AT',
  CustomOrderingIndex = 'CUSTOM_ORDERING_INDEX',
  UpdatedAt = 'UPDATED_AT'
}

export type ColumnSortInput = {
  key: Scalars['String']['input'];
  order?: InputMaybe<SortOrder>;
};

export type ConfirmResetPasswordInput = {
  token: Scalars['String']['input'];
};

export type ContentTranslationSettings = {
  __typename?: 'ContentTranslationSettings';
  enabled: Scalars['Boolean']['output'];
};

export type ContentTranslationSettingsInput = {
  enabled: Scalars['Boolean']['input'];
};

export type ContentTypeTemplate = {
  __typename?: 'ContentTypeTemplate';
  allowedReactions?: Maybe<Array<Scalars['String']['output']>>;
  context: PostTypeContext;
  forbiddenReactions?: Maybe<Array<Scalars['String']['output']>>;
  languageTemplate?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  pluralName: Scalars['String']['output'];
  postFields?: Maybe<CustomFieldsSchema>;
  /** @deprecated Use allowedReactions instead. */
  primaryReactionType?: Maybe<ReactionType>;
  selfRepliable?: Maybe<Scalars['Boolean']['output']>;
  shortContentTemplate?: Maybe<Scalars['String']['output']>;
  singleChoiceReactions?: Maybe<Array<Scalars['String']['output']>>;
  slate?: Maybe<Slate>;
  slug: Scalars['String']['output'];
  titleTemplate?: Maybe<Scalars['String']['output']>;
  validReplyTypesIds?: Maybe<Array<Scalars['String']['output']>>;
};

export type ContextPermissions = {
  __typename?: 'ContextPermissions';
  context: PermissionContext;
  entityActions: Array<EntityPermissions>;
};

export type ContextScopes = {
  __typename?: 'ContextScopes';
  context: PermissionContext;
  entityScopes: Array<EntityScopes>;
};

export type ConvertPostInput = {
  byPassFieldPermissions?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackField?: InputMaybe<Scalars['String']['input']>;
  targetPostTypeId: Scalars['ID']['input'];
};

export type CreateAccessGroupInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  entityId: Scalars['ID']['input'];
  entityType: AccessGroupEntityType;
  info?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  type: Scalars['String']['input'];
};

export type CreateAppInput = {
  about?: InputMaybe<Scalars['String']['input']>;
  authorName?: InputMaybe<Scalars['String']['input']>;
  authorUrl?: InputMaybe<Scalars['String']['input']>;
  bannerId?: InputMaybe<Scalars['String']['input']>;
  comingSoon?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  faviconId?: InputMaybe<Scalars['String']['input']>;
  imageId?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  networkId: Scalars['String']['input'];
  privacyPolicyUrl?: InputMaybe<Scalars['String']['input']>;
  requiredPlan?: InputMaybe<PlanName>;
  slug?: InputMaybe<Scalars['String']['input']>;
  termsOfServiceUrl?: InputMaybe<Scalars['String']['input']>;
};

export type CreateBadgeInput = {
  active: Scalars['Boolean']['input'];
  backgroundColor?: InputMaybe<Scalars['String']['input']>;
  daysUntilExpired?: InputMaybe<Scalars['Float']['input']>;
  imageId?: InputMaybe<Scalars['String']['input']>;
  longDescription?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  settings?: InputMaybe<Array<BadgeSettingsInput>>;
  shortDescription: Scalars['String']['input'];
  text?: InputMaybe<Scalars['String']['input']>;
  textColor?: InputMaybe<Scalars['String']['input']>;
};

export type CreateCollectionInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  externalId?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CreateEmojiInput = {
  text: Scalars['String']['input'];
};

export type CreateFileInput = {
  contentType: Scalars['String']['input'];
  extension: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
};

export type CreateHighlightedTag = {
  /** ID of an existing tag. This field will become required in an upcoming release. */
  tagId: Scalars['String']['input'];
};

export type CreateImageInput = {
  contentType: Scalars['String']['input'];
  cropHeight?: InputMaybe<Scalars['Int']['input']>;
  cropWidth?: InputMaybe<Scalars['Int']['input']>;
  cropX?: InputMaybe<Scalars['Int']['input']>;
  cropY?: InputMaybe<Scalars['Int']['input']>;
  cropZoom?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type CreateLimitedSupportTokenInput = {
  networkId: Scalars['String']['input'];
};

export type CreatePermissionInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  scopes: Array<Scalars['String']['input']>;
};

/** Input for creating a post */
export type CreatePostInput = {
  /** The id of all the attachments to this post. */
  attachmentIds?: InputMaybe<Array<Scalars['String']['input']>>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** The custom seo detail of this post */
  customSeoDetail?: InputMaybe<CustomSeoDetailInput>;
  externalId?: InputMaybe<Scalars['String']['input']>;
  externalUrl?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  /** Whether the post is locked */
  locked?: InputMaybe<Scalars['Boolean']['input']>;
  /** The fields of the post. Depending of the post type it may include title, text, image, etc. */
  mappingFields: Array<PostMappingFieldInput>;
  ownerId?: InputMaybe<Scalars['ID']['input']>;
  /** The id of this post's type */
  postTypeId: Scalars['String']['input'];
  /** Whether the post is published */
  publish?: Scalars['Boolean']['input'];
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** The slug of the post creating the human readable part of its URL */
  slug?: InputMaybe<Scalars['String']['input']>;
  /** The TagIds for this post. Can be used in conjunction with tagNames. */
  tagIds?: InputMaybe<Array<Scalars['String']['input']>>;
  /** The tags of this post. Can be used in conjunction with tagIds. */
  tagNames?: InputMaybe<Array<Scalars['String']['input']>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CreatePostTypeInput = {
  allowedReactions?: InputMaybe<Array<Scalars['String']['input']>>;
  context: PostTypeContext;
  customReactions?: InputMaybe<Array<CustomReactionInput>>;
  description?: InputMaybe<Scalars['String']['input']>;
  excludedNativeShortcuts?: InputMaybe<Array<Scalars['String']['input']>>;
  forbiddenReactions?: InputMaybe<Array<Scalars['String']['input']>>;
  iconId?: InputMaybe<Scalars['ID']['input']>;
  languageTemplate?: InputMaybe<Scalars['String']['input']>;
  layout?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  nativeFieldsTemplates?: InputMaybe<NativeFieldsTemplatesInput>;
  pluralName: Scalars['String']['input'];
  postFields?: InputMaybe<CustomFieldsSchemaInput>;
  primaryReactionType?: InputMaybe<ReactionType>;
  recommendationsSettings?: InputMaybe<PostTypeRecommendationSettingsInput>;
  selfRepliable?: InputMaybe<Scalars['Boolean']['input']>;
  shortContentTemplate?: InputMaybe<Scalars['String']['input']>;
  singleChoiceReactions?: InputMaybe<Array<Scalars['String']['input']>>;
  slate?: InputMaybe<SlateInput>;
  titleTemplate?: InputMaybe<Scalars['String']['input']>;
  validReplyTypesIds?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type CreateReportInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  entityId: Scalars['String']['input'];
  entityType: ModerationEntityType;
  reportCategory: ReportCategory;
  spaceId?: InputMaybe<Scalars['String']['input']>;
};

/** Input for creating a space. */
export type CreateSpaceInput = {
  address?: InputMaybe<SpaceAddressInput>;
  adminIds?: InputMaybe<Array<Scalars['String']['input']>>;
  /** The id of the space banner. */
  bannerId?: InputMaybe<Scalars['String']['input']>;
  /** The id of the collection in which the space is created. */
  collectionId?: InputMaybe<Scalars['ID']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  customSeoDetail?: InputMaybe<CustomSeoDetailInput>;
  /** The description of the space. */
  description?: InputMaybe<Scalars['String']['input']>;
  externalId?: InputMaybe<Scalars['String']['input']>;
  externalUrl?: InputMaybe<Scalars['String']['input']>;
  /** Is this space hidden? */
  hidden?: InputMaybe<Scalars['Boolean']['input']>;
  /** The id of the space image. */
  imageId?: InputMaybe<Scalars['String']['input']>;
  /** Is this space invite only? */
  inviteOnly?: InputMaybe<Scalars['Boolean']['input']>;
  layout?: InputMaybe<Scalars['String']['input']>;
  memberIds?: InputMaybe<Array<Scalars['String']['input']>>;
  /** The name of the space. */
  name: Scalars['String']['input'];
  nonAdminsCanInvite?: InputMaybe<Scalars['Boolean']['input']>;
  /** Is this space a private space? */
  private?: InputMaybe<Scalars['Boolean']['input']>;
  seoDetail?: InputMaybe<SpaceSeoDetailInput>;
  slate?: InputMaybe<SlateInput>;
  /** The slug of the space. It will be auto-generated if not provided. */
  slug?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<SpaceType>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  whoCanPost?: InputMaybe<Array<SpaceRoleType>>;
  whoCanReact?: InputMaybe<Array<SpaceRoleType>>;
  whoCanReply?: InputMaybe<Array<SpaceRoleType>>;
  withRoles?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Input for creating a tag. */
export type CreateTagInput = {
  /** The description of the tag. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The slug of the tag. Slug is auto-generated from title if left empty. */
  slug?: InputMaybe<Scalars['String']['input']>;
  /** The name of the tag. */
  title: Scalars['String']['input'];
};

export type CreateTemplateInput = {
  about?: InputMaybe<Scalars['String']['input']>;
  appIds?: InputMaybe<Array<Scalars['String']['input']>>;
  authorName?: InputMaybe<Scalars['String']['input']>;
  authorUrl?: InputMaybe<Scalars['String']['input']>;
  bannerId?: InputMaybe<Scalars['String']['input']>;
  categories?: InputMaybe<Array<Scalars['String']['input']>>;
  comingSoon?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  entityId: Scalars['String']['input'];
  entityType: TemplateEntityType;
  faviconId?: InputMaybe<Scalars['String']['input']>;
  hubContentId?: InputMaybe<Scalars['String']['input']>;
  imageId?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  previewHtml?: InputMaybe<Scalars['String']['input']>;
  privacyPolicyUrl?: InputMaybe<Scalars['String']['input']>;
  requiredPlan?: InputMaybe<PlanName>;
  slug?: InputMaybe<Scalars['String']['input']>;
  termsOfServiceUrl?: InputMaybe<Scalars['String']['input']>;
  upsertKey?: InputMaybe<Scalars['String']['input']>;
};

export enum CreatorType {
  App = 'App',
  Member = 'Member',
  System = 'System'
}

export type CustomCode = {
  __typename?: 'CustomCode';
  anonymize: Scalars['Boolean']['output'];
  code: Scalars['String']['output'];
  position: CustomCodePosition;
};

export enum CustomCodePosition {
  Body = 'BODY',
  Head = 'HEAD'
}

export type CustomField = {
  __typename?: 'CustomField';
  key: Scalars['String']['output'];
  relationEntities?: Maybe<CustomFieldRelation>;
  value?: Maybe<Scalars['String']['output']>;
};

export type CustomFieldInput = {
  key: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type CustomFieldPrivacy = {
  __typename?: 'CustomFieldPrivacy';
  allow: Array<CustomFieldPrivacyOptions>;
};

export type CustomFieldPrivacyInput = {
  allow: Array<CustomFieldPrivacyOptions>;
};

export enum CustomFieldPrivacyOptions {
  Admin = 'ADMIN',
  Own = 'OWN'
}

export type CustomFieldRelation = {
  __typename?: 'CustomFieldRelation';
  medias: Array<Media>;
  members: Array<Member>;
  posts: Array<Post>;
  spaces: Array<Space>;
  tags: Array<Tag>;
};

export type CustomFieldSchema = {
  __typename?: 'CustomFieldSchema';
  archived?: Maybe<Scalars['Boolean']['output']>;
  default?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  externalKeys?: Maybe<Array<Scalars['String']['output']>>;
  items?: Maybe<BaseCustomFieldSchema>;
  key: Scalars['String']['output'];
  name: Scalars['String']['output'];
  properties?: Maybe<Array<BaseCustomFieldSchema>>;
  readPrivacy?: Maybe<CustomFieldPrivacy>;
  required?: Maybe<Scalars['Boolean']['output']>;
  searchable?: Maybe<Scalars['Boolean']['output']>;
  settings?: Maybe<Array<CustomFieldSettings>>;
  type: CustomFieldType;
  typeOptions?: Maybe<CustomFieldTypeOptions>;
  validators?: Maybe<Array<CustomFieldValidator>>;
  writePrivacy?: Maybe<CustomFieldPrivacy>;
};

export type CustomFieldSchemaInput = {
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  default?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  externalKeys?: InputMaybe<Array<Scalars['String']['input']>>;
  items?: InputMaybe<BaseCustomFieldSchemaInput>;
  key: Scalars['String']['input'];
  name: Scalars['String']['input'];
  properties?: InputMaybe<Array<BaseCustomFieldSchemaInput>>;
  readPrivacy?: InputMaybe<CustomFieldPrivacyInput>;
  required?: InputMaybe<Scalars['Boolean']['input']>;
  searchable?: InputMaybe<Scalars['Boolean']['input']>;
  settings?: InputMaybe<Array<CustomFieldSettingsInput>>;
  type: CustomFieldType;
  typeOptions?: InputMaybe<CustomFieldTypeOptionsInput>;
  validators?: InputMaybe<Array<CustomFieldValidatorInput>>;
  writePrivacy?: InputMaybe<CustomFieldPrivacyInput>;
};

export type CustomFieldSettings = {
  __typename?: 'CustomFieldSettings';
  key: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type CustomFieldSettingsInput = {
  key: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export enum CustomFieldType {
  Array = 'array',
  Boolean = 'boolean',
  Date = 'date',
  Number = 'number',
  Object = 'object',
  Relation = 'relation',
  RichText = 'richText',
  Text = 'text'
}

export type CustomFieldTypeOptions = {
  __typename?: 'CustomFieldTypeOptions';
  dateType?: Maybe<DateTypeOptions>;
  numberType?: Maybe<NumberTypeOptions>;
  relationType?: Maybe<RelationTypeOptions>;
  richTextType?: Maybe<RichTextTypeOptions>;
  textType?: Maybe<TextTypeOptions>;
};

export type CustomFieldTypeOptionsInput = {
  dateType?: InputMaybe<DateTypeOptions>;
  numberType?: InputMaybe<NumberTypeOptions>;
  relationType?: InputMaybe<RelationTypeOptions>;
  richTextType?: InputMaybe<RichTextTypeOptions>;
  textType?: InputMaybe<TextTypeOptions>;
};

export type CustomFieldValidator = {
  __typename?: 'CustomFieldValidator';
  customErrorMessage?: Maybe<Scalars['String']['output']>;
  validation: CustomFieldValidators;
  value: Scalars['String']['output'];
};

export type CustomFieldValidatorInput = {
  customErrorMessage?: InputMaybe<Scalars['String']['input']>;
  validation: CustomFieldValidators;
  value: Scalars['String']['input'];
};

export enum CustomFieldValidators {
  AllOf = 'allOf',
  AnyOf = 'anyOf',
  Enum = 'enum',
  ExclusiveMaximum = 'exclusiveMaximum',
  ExclusiveMinimum = 'exclusiveMinimum',
  Format = 'format',
  MaxItems = 'maxItems',
  MaxLength = 'maxLength',
  MaxProperties = 'maxProperties',
  Maximum = 'maximum',
  MinItems = 'minItems',
  MinLength = 'minLength',
  MinProperties = 'minProperties',
  Minimum = 'minimum',
  MultipleOf = 'multipleOf',
  Not = 'not',
  OneOf = 'oneOf',
  Pattern = 'pattern',
  UniqueItems = 'uniqueItems'
}

export type CustomFieldsSchema = {
  __typename?: 'CustomFieldsSchema';
  fields: Array<CustomFieldSchema>;
};

export type CustomFieldsSchemaInput = {
  fields: Array<CustomFieldSchemaInput>;
};

export enum CustomHostnameStatus {
  Missing = 'Missing',
  Ok = 'Ok',
  Pending = 'Pending',
  Wrong = 'Wrong'
}

export type CustomReaction = {
  __typename?: 'CustomReaction';
  activeColor?: Maybe<Scalars['String']['output']>;
  activeGlyphId?: Maybe<Scalars['String']['output']>;
  activeName?: Maybe<Scalars['String']['output']>;
  color?: Maybe<Scalars['String']['output']>;
  glyphId: Scalars['String']['output'];
  key: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type CustomReactionInput = {
  activeColor?: InputMaybe<Scalars['String']['input']>;
  activeGlyphId?: InputMaybe<Scalars['String']['input']>;
  activeName?: InputMaybe<Scalars['String']['input']>;
  color?: InputMaybe<Scalars['String']['input']>;
  glyphId: Scalars['String']['input'];
  key: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type CustomSeoDetail = {
  __typename?: 'CustomSeoDetail';
  canonicalUrl?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  noIndex?: Maybe<Scalars['Boolean']['output']>;
  thumbnail?: Maybe<Media>;
  thumbnailId?: Maybe<Scalars['ID']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type CustomSeoDetailInput = {
  canonicalUrl?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  noIndex?: InputMaybe<Scalars['Boolean']['input']>;
  thumbnailId?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export enum CustomSsoType {
  Saml = 'Saml',
  Oauth2 = 'oauth2'
}

export type DailyApiUsage = {
  __typename?: 'DailyApiUsage';
  date: Scalars['DateTime']['output'];
  total: Scalars['Float']['output'];
  usageType: ApiRequestLimitType;
  values: Array<ClientApiUsage>;
};

export enum DateTypeOptions {
  Date = 'date',
  Datetime = 'datetime'
}

export enum DayOfWeek {
  Friday = 'FRIDAY',
  Monday = 'MONDAY',
  Saturday = 'SATURDAY',
  Sunday = 'SUNDAY',
  Thursday = 'THURSDAY',
  Tuesday = 'TUESDAY',
  Wednesday = 'WEDNESDAY'
}

export enum DefaultSsoType {
  Apple = 'Apple',
  Discord = 'Discord',
  Slack = 'Slack',
  Facebook = 'facebook',
  Google = 'google',
  Linkedin = 'linkedin'
}

export type DeprecatedBaseFilterInput = {
  and?: InputMaybe<Array<DeprecatedBaseFilterInput>>;
  filtername: Filtername;
  key?: InputMaybe<Scalars['String']['input']>;
  negator?: InputMaybe<Scalars['String']['input']>;
  operator?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<DeprecatedBaseFilterInput>>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type DeprecatedFiltersInput = {
  filter: DeprecatedBaseFilterInput;
};

export enum DnsRecordStatus {
  Healthy = 'Healthy',
  Missing = 'Missing',
  Pending = 'Pending',
  Wrong = 'Wrong'
}

export enum DnsRecordType {
  Cname = 'CNAME',
  Txt = 'TXT'
}

export type DomainAvailability = {
  __typename?: 'DomainAvailability';
  available: Scalars['Boolean']['output'];
};

export type DomainAvailabilityInput = {
  domain: Scalars['String']['input'];
};

export type DomainDnsRecord = {
  __typename?: 'DomainDnsRecord';
  desiredValue: Scalars['String']['output'];
  message?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  status: DnsRecordStatus;
  type: DnsRecordType;
};

export type DomainParseResult = {
  __typename?: 'DomainParseResult';
  isApex: Scalars['Boolean']['output'];
  parts: DomainParts;
};

export type DomainParts = {
  __typename?: 'DomainParts';
  /** The apex part of the address. It includes the domain and TLD. The `my-domain.com` in `sub.my-domain.com`. */
  apex: Scalars['String']['output'];
  /** The full domain name (a.k.a FQDN). It includes the subdomain, domain, and TLD. Is equivalent to `apex` if `subdomain` is missing. */
  domain: Scalars['String']['output'];
  /** The Second-level domain of the address that appears before TLD. The `my-domain` in `sub.my-domain.com`. */
  sld: Scalars['String']['output'];
  /** The subdomain part of the address. The `sub` in `sub.my-domain.com`. */
  subdomain?: Maybe<Scalars['String']['output']>;
  /** The Top-level domain of the address, per ICANN specifications. (e.g. com, org, co.uk) */
  tld: Scalars['String']['output'];
};

export type DomainProbeResult = {
  __typename?: 'DomainProbeResult';
  customHostnameStatus: CustomHostnameStatus;
  dnsRecords: Array<DomainDnsRecord>;
  parseResult?: Maybe<DomainParseResult>;
  status: DomainProbeStatus;
};

export enum DomainProbeStatus {
  Active = 'Active',
  Available = 'Available',
  Invalid = 'Invalid',
  Pending = 'Pending',
  ReadyForTransfer = 'ReadyForTransfer',
  Reserved = 'Reserved',
  RestrictedFeature = 'RestrictedFeature',
  Taken = 'Taken'
}

export type DomainTransferStatus = {
  __typename?: 'DomainTransferStatus';
  aaaarecordSuccess: Scalars['Boolean']['output'];
  aaaarecords: Array<Scalars['String']['output']>;
  arecordSuccess: Scalars['Boolean']['output'];
  arecords: Array<Scalars['String']['output']>;
  cnameSuccess: Scalars['Boolean']['output'];
  cnames: Array<Scalars['String']['output']>;
  domain: Scalars['String']['output'];
  ns: Array<Scalars['String']['output']>;
  root: Scalars['Boolean']['output'];
  success: Scalars['Boolean']['output'];
  tribeARecords: Array<Scalars['String']['output']>;
  tribeCname: Scalars['String']['output'];
};

export type DynamicBlock = {
  __typename?: 'DynamicBlock';
  app?: Maybe<App>;
  appId: Scalars['String']['output'];
  contexts?: Maybe<Array<PermissionContext>>;
  description?: Maybe<Scalars['String']['output']>;
  favicon?: Maybe<Media>;
  faviconId?: Maybe<Scalars['ID']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<Media>;
  imageId?: Maybe<Scalars['ID']['output']>;
  key: Scalars['String']['output'];
  maxSize: DynamicBlockSize;
  name: Scalars['String']['output'];
  slate?: Maybe<Slate>;
  staffOnly: Scalars['Boolean']['output'];
};


export type DynamicBlockSlateArgs = {
  context: PermissionContext;
  entityId?: InputMaybe<Scalars['ID']['input']>;
};

export type DynamicBlockEdge = {
  __typename?: 'DynamicBlockEdge';
  cursor: Scalars['String']['output'];
  node: DynamicBlock;
};

export enum DynamicBlockSize {
  Full = 'full',
  Lg = 'lg',
  Md = 'md',
  Sm = 'sm',
  Xl = 'xl'
}

export type EmailAvailability = {
  __typename?: 'EmailAvailability';
  available: Scalars['Boolean']['output'];
};

export enum EmailDigestFrequency {
  Daily = 'DAILY',
  Weekly = 'WEEKLY'
}

export type EmailLog = {
  __typename?: 'EmailLog';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  reason?: Maybe<Scalars['String']['output']>;
  recipient: Scalars['String']['output'];
  status: EmailStatus;
  type: EmailType;
  updatedAt: Scalars['DateTime']['output'];
};

export type EmailLogEdge = {
  __typename?: 'EmailLogEdge';
  cursor: Scalars['String']['output'];
  node: EmailLog;
};

export enum EmailStatus {
  Blocked = 'BLOCKED',
  Bounced = 'BOUNCED',
  Created = 'CREATED',
  Deferred = 'DEFERRED',
  Delivered = 'DELIVERED',
  Dropped = 'DROPPED',
  Processed = 'PROCESSED',
  Sent = 'SENT'
}

export enum EmailType {
  AppNotification = 'AppNotification',
  CollaboratorInvitation = 'CollaboratorInvitation',
  EmailDigest = 'EmailDigest',
  EmailVerification = 'EmailVerification',
  ExportFinished = 'ExportFinished',
  MemberConfirmation = 'MemberConfirmation',
  MemberInvitation = 'MemberInvitation',
  Notification = 'Notification',
  ResetPassword = 'ResetPassword',
  Unknown = 'Unknown'
}

export type Embed = {
  __typename?: 'Embed';
  author?: Maybe<Scalars['String']['output']>;
  author_url?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  html?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  options?: Maybe<Scalars['String']['output']>;
  provider_name?: Maybe<Scalars['String']['output']>;
  thumbnail_height?: Maybe<Scalars['String']['output']>;
  thumbnail_url?: Maybe<Scalars['String']['output']>;
  thumbnail_width?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  url: Scalars['String']['output'];
};

export type EmbedInput = {
  options?: InputMaybe<Scalars['String']['input']>;
  url: Scalars['String']['input'];
};

export type Emoji = {
  __typename?: 'Emoji';
  id: Scalars['ID']['output'];
  text: Scalars['String']['output'];
};

export type EntityListFilterByInput = {
  key: Scalars['String']['input'];
  operator: EntityListFilterByOperator;
  value: Scalars['String']['input'];
};

export enum EntityListFilterByOperator {
  Contains = 'contains',
  EndsWith = 'endsWith',
  Equals = 'equals',
  Gt = 'gt',
  Gte = 'gte',
  HasValue = 'hasValue',
  In = 'in',
  Lt = 'lt',
  Lte = 'lte',
  Nin = 'nin',
  Not = 'not',
  StartsWith = 'startsWith'
}

export type EntityPermissions = {
  __typename?: 'EntityPermissions';
  actions: Array<ActionPermissions>;
  id: Scalars['String']['output'];
};

export type EntityReport = {
  __typename?: 'EntityReport';
  data?: Maybe<Array<ReportData>>;
  description?: Maybe<Scalars['String']['output']>;
  endDate?: Maybe<Scalars['DateTime']['output']>;
  entity?: Maybe<ReportableEntity>;
  entityId: Scalars['ID']['output'];
  entityType: ReportableEntityType;
  startDate?: Maybe<Scalars['DateTime']['output']>;
  tooltip?: Maybe<Scalars['String']['output']>;
};

export type EntityScopes = {
  __typename?: 'EntityScopes';
  id: Scalars['String']['output'];
  scopes: Array<Scalars['String']['output']>;
};

export type EventType = {
  __typename?: 'EventType';
  description: Scalars['String']['output'];
  name: Scalars['String']['output'];
  noun: Scalars['String']['output'];
  requiredScope: Scalars['String']['output'];
  shortDescription: Scalars['String']['output'];
  verb: EventVerb;
};

export enum EventVerb {
  Accepted = 'ACCEPTED',
  Added = 'ADDED',
  Banned = 'BANNED',
  Blocked = 'BLOCKED',
  Canceled = 'CANCELED',
  Clicked = 'CLICKED',
  Created = 'CREATED',
  Custom = 'CUSTOM',
  Deleted = 'DELETED',
  Expired = 'EXPIRED',
  Failed = 'FAILED',
  Followed = 'FOLLOWED',
  Generated = 'GENERATED',
  Hidden = 'HIDDEN',
  Impression = 'IMPRESSION',
  Installed = 'INSTALLED',
  LoggedIn = 'LOGGED_IN',
  MarkedForPurge = 'MARKED_FOR_PURGE',
  NotAssigned = 'NOT_ASSIGNED',
  Permitted = 'PERMITTED',
  Ping = 'PING',
  Pinged = 'PINGED',
  Pinned = 'PINNED',
  Published = 'PUBLISHED',
  Purged = 'PURGED',
  Rejected = 'REJECTED',
  Removed = 'REMOVED',
  Resent = 'RESENT',
  Revoked = 'REVOKED',
  Sent = 'SENT',
  SignedUp = 'SIGNED_UP',
  Succeeded = 'SUCCEEDED',
  Suspended = 'SUSPENDED',
  Unblocked = 'UNBLOCKED',
  Unfollowed = 'UNFOLLOWED',
  Unhidden = 'UNHIDDEN',
  Uninstalled = 'UNINSTALLED',
  Unpinned = 'UNPINNED',
  Unpublished = 'UNPUBLISHED',
  Unsuspended = 'UNSUSPENDED',
  Unused = 'UNUSED',
  Unverified = 'UNVERIFIED',
  Updated = 'UPDATED',
  Used = 'USED',
  Verified = 'VERIFIED',
  Viewed = 'VIEWED'
}

export type Export = {
  __typename?: 'Export';
  createdAt: Scalars['DateTime']['output'];
  endedAt?: Maybe<Scalars['DateTime']['output']>;
  fields: Array<Scalars['String']['output']>;
  file?: Maybe<File>;
  fileId: Scalars['ID']['output'];
  filterBy?: Maybe<Array<MemberListFilterBy>>;
  id: Scalars['ID']['output'];
  networkId: Scalars['ID']['output'];
  startedAt?: Maybe<Scalars['DateTime']['output']>;
  status: ExportStatus;
  updatedAt: Scalars['DateTime']['output'];
};

export type ExportEdge = {
  __typename?: 'ExportEdge';
  cursor: Scalars['String']['output'];
  node: Export;
};

export type ExportInput = {
  fields: Array<Scalars['String']['input']>;
  filterBy?: InputMaybe<Array<MemberListFilterByInput>>;
  query?: InputMaybe<Scalars['String']['input']>;
};

export enum ExportListOrderByEnum {
  CreatedAt = 'CreatedAt',
  UpdatedAt = 'UpdatedAt'
}

export enum ExportStatus {
  Done = 'Done',
  Expired = 'Expired',
  Failed = 'Failed',
  InProgress = 'InProgress',
  Initialized = 'Initialized'
}

export type ExtraProperty = {
  __typename?: 'ExtraProperty';
  key: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export enum ExtraPropertyEntityType {
  Member = 'Member',
  Network = 'Network'
}

export type File = {
  __typename?: 'File';
  downloadUrl: Scalars['String']['output'];
  extension: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  size?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<MediaStatus>;
  url: Scalars['String']['output'];
};

export enum FilterOperator {
  And = 'And',
  Or = 'Or'
}

export enum Filtername {
  And = 'and',
  Leaf = 'leaf',
  Or = 'or'
}

export type FiltersInput = {
  groupFilters: Array<GroupFiltersInput>;
  operator: FilterOperator;
};

export enum FlaggedType {
  Member = 'MEMBER',
  System = 'SYSTEM'
}

export type Footer = {
  __typename?: 'Footer';
  urls: Array<FooterUrl>;
};

export type FooterUrl = {
  __typename?: 'FooterUrl';
  title: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type GeoBoundingBoxInput = {
  bottomRight: GeoPointInput;
  topLeft: GeoPointInput;
};

export type GeoPointInput = {
  lat: Scalars['Float']['input'];
  lon: Scalars['Float']['input'];
};

export type GeoRadiusInput = {
  center: GeoPointInput;
  radius: Scalars['Float']['input'];
};

export type GlobalToken = {
  __typename?: 'GlobalToken';
  accessToken: Scalars['String']['output'];
  email: Scalars['String']['output'];
};

export type GlobalTokenInput = {
  email: Scalars['String']['input'];
  verificationCode: Scalars['String']['input'];
};

export type Glyph = {
  __typename?: 'Glyph';
  id: Scalars['ID']['output'];
  text: Scalars['String']['output'];
  variant: GlyphMediaVariant;
};

export enum GlyphMediaVariant {
  Emoji = 'emoji',
  Icon = 'icon'
}

export type GroupFiltersInput = {
  matchFilters: Array<MatchFilterInput>;
  operator: FilterOperator;
};

export enum HomeSpaceType {
  Default = 'Default',
  NewUser = 'NewUser',
  ReturningUser = 'ReturningUser'
}

export type HubContent = {
  __typename?: 'HubContent';
  attachmentIds: Array<Scalars['ID']['output']>;
  attachments?: Maybe<Array<File>>;
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  embedIds: Array<Scalars['ID']['output']>;
  embeds?: Maybe<Array<Embed>>;
  fields?: Maybe<Array<HubContentCustomField>>;
  id: Scalars['ID']['output'];
  imageIds: Array<Scalars['ID']['output']>;
  images?: Maybe<Array<Media>>;
  language?: Maybe<Scalars['String']['output']>;
  /** Whether the post is locked */
  locked: Scalars['Boolean']['output'];
  postTypeId: Scalars['ID']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  tagIds?: Maybe<Array<Scalars['String']['output']>>;
  thumbnail?: Maybe<Media>;
  thumbnailId?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type HubContentCustomField = {
  __typename?: 'HubContentCustomField';
  key: Scalars['String']['output'];
  relationEntities?: Maybe<HubContentCustomFieldRelation>;
  value?: Maybe<Scalars['String']['output']>;
};

export type HubContentCustomFieldRelation = {
  __typename?: 'HubContentCustomFieldRelation';
  medias: Array<Media>;
};

export type Image = {
  __typename?: 'Image';
  cropHeight?: Maybe<Scalars['Int']['output']>;
  cropWidth?: Maybe<Scalars['Int']['output']>;
  cropX: Scalars['Int']['output'];
  cropY: Scalars['Int']['output'];
  cropZoom: Scalars['Float']['output'];
  dominantColorHex?: Maybe<Scalars['String']['output']>;
  downloadUrl: Scalars['String']['output'];
  dpi?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  status?: Maybe<MediaStatus>;
  url: Scalars['String']['output'];
  urls?: Maybe<MediaUrls>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type ImpersonateLoginToNetworkInput = {
  memberId: Scalars['ID']['input'];
  networkId: Scalars['ID']['input'];
};

export type In = Space;

export type InputPathPermissions = {
  __typename?: 'InputPathPermissions';
  isAuthorized: IsAuthorized;
  path: Scalars['String']['output'];
  values: Array<ValuePermissions>;
};

export type InstallAppInput = {
  context?: InputMaybe<PermissionContext>;
  entityId?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<Array<PrimaryScopes>>;
  templatesMappings?: InputMaybe<AppInstallationTemplatesMappingsInput>;
};

export type IntValue = {
  __typename?: 'IntValue';
  int: Scalars['Int']['output'];
};

export type InteractWithAppInput = {
  appId: Scalars['String']['input'];
  callbackId?: InputMaybe<Scalars['String']['input']>;
  dynamicBlockKey?: InputMaybe<Scalars['String']['input']>;
  inputs?: InputMaybe<Scalars['String']['input']>;
  interactionId: Scalars['String']['input'];
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  props?: InputMaybe<Scalars['String']['input']>;
  shortcutKey?: InputMaybe<Scalars['String']['input']>;
};

/** Input for inviting members. */
export type InviteMembersInput = {
  /** The ids of the default spaces the invitees have. */
  defaultSpacesIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** When does the invitations expire? Empty for no expiration. */
  expiresAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Custom message for invitation. */
  invitationMessage?: InputMaybe<Scalars['String']['input']>;
  /** The details of the invitees */
  invitees: Array<InviteeInput>;
  /** The id of the role the invitees have. */
  roleId?: InputMaybe<Scalars['ID']['input']>;
};

export type InviteeInput = {
  /** The ids of the default spaces this invitee has. */
  defaultSpacesIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** The email address of the invitee. */
  email: Scalars['String']['input'];
  /** The name of the invitee. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** The role id of the invitee. */
  roleId?: InputMaybe<Scalars['ID']['input']>;
};

export type Invoice = {
  __typename?: 'Invoice';
  cardLastFourDigits?: Maybe<Scalars['String']['output']>;
  currency: Scalars['String']['output'];
  date: Scalars['DateTime']['output'];
  invoiceUrl?: Maybe<Scalars['String']['output']>;
  status: InvoiceStatus;
  total: Scalars['Float']['output'];
};

export enum InvoiceStatus {
  Cancelled = 'cancelled',
  Failed = 'failed',
  Paid = 'paid',
  Pending = 'pending'
}

export type IsAuthorized = {
  __typename?: 'IsAuthorized';
  authorized: Scalars['Boolean']['output'];
  reason?: Maybe<UnauthorizedReason>;
  requiredPlan?: Maybe<PlanName>;
};

export type JoinNetworkInput = {
  captchaToken?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email: Scalars['String']['input'];
  externalId?: InputMaybe<Scalars['String']['input']>;
  externalUrl?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  tagline?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};

export type JoinNetworkWithLinkInput = {
  captchaToken?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  invitationLinkId: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username?: InputMaybe<Scalars['String']['input']>;
};

export type JoinNetworkWithTokenInput = {
  captchaToken?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  token: Scalars['String']['input'];
  username?: InputMaybe<Scalars['String']['input']>;
};

export type JwtSsoAuthUrls = {
  __typename?: 'JwtSsoAuthUrls';
  authorizationUrl?: Maybe<Scalars['String']['output']>;
  signUpUrl?: Maybe<Scalars['String']['output']>;
};

export type KeyValue = {
  __typename?: 'KeyValue';
  key: Scalars['String']['output'];
  value?: Maybe<Scalars['String']['output']>;
};

export type LeaderboardItem = {
  __typename?: 'LeaderboardItem';
  member?: Maybe<Member>;
  memberId: Scalars['String']['output'];
  score: Scalars['Float']['output'];
};

export type LoginNetworkWithPasswordInput = {
  password: Scalars['String']['input'];
  usernameOrEmail: Scalars['String']['input'];
};

export type LoginSupportWithSsoCodeInput = {
  code: Scalars['String']['input'];
  hd: Scalars['String']['input'];
  prompt: Scalars['String']['input'];
  scope: Scalars['String']['input'];
  state: Scalars['String']['input'];
};

export type LoginWithSamlResponseInput = {
  relayState: Scalars['String']['input'];
  samlResponse: Scalars['String']['input'];
};

export type LoginWithSsoCodeInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  hd?: InputMaybe<Scalars['String']['input']>;
  oauth_token?: InputMaybe<Scalars['String']['input']>;
  oauth_verifier?: InputMaybe<Scalars['String']['input']>;
  prompt?: InputMaybe<Scalars['String']['input']>;
  scope?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
};

export type LogoutNetworkInput = {
  sessionId: Scalars['String']['input'];
};

export type MassActionFilters = {
  entityIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  filterBy?: InputMaybe<Array<MemberListFilterByInput>>;
  query?: InputMaybe<Scalars['String']['input']>;
};

export type MassActionFiltersModel = {
  __typename?: 'MassActionFiltersModel';
  entityIds?: Maybe<Array<Scalars['ID']['output']>>;
  filterBy?: Maybe<Array<MemberListFilterBy>>;
  query?: Maybe<Scalars['String']['output']>;
};

export type MassActionRequest = {
  __typename?: 'MassActionRequest';
  action: MassActionRequestAction;
  context: MassActionRequestContext;
  createdAt: Scalars['DateTime']['output'];
  createdById: Scalars['String']['output'];
  endedAt?: Maybe<Scalars['DateTime']['output']>;
  entitiesCount?: Maybe<Scalars['Int']['output']>;
  failedCount?: Maybe<Scalars['Int']['output']>;
  filters: MassActionFiltersModel;
  id: Scalars['ID']['output'];
  networkId: Scalars['ID']['output'];
  processedCount?: Maybe<Scalars['Int']['output']>;
  startedAt?: Maybe<Scalars['DateTime']['output']>;
  status: MassActionRequestStatus;
  updatedAt: Scalars['DateTime']['output'];
};

export enum MassActionRequestAction {
  Accept = 'Accept',
  AddTag = 'AddTag',
  AddToSpace = 'AddToSpace',
  AssignBadge = 'AssignBadge',
  Create = 'Create',
  Delete = 'Delete',
  Expire = 'Expire',
  Flag = 'Flag',
  Follow = 'Follow',
  Hide = 'Hide',
  Lock = 'Lock',
  Move = 'Move',
  Pin = 'Pin',
  Publish = 'Publish',
  Reject = 'Reject',
  RemoveTag = 'RemoveTag',
  Resend = 'Resend',
  Revoke = 'Revoke',
  RevokeBadge = 'RevokeBadge',
  Suspend = 'Suspend',
  Unflag = 'Unflag',
  Unfollow = 'Unfollow',
  Unhide = 'Unhide',
  Unpin = 'Unpin',
  Update = 'Update',
  Verify = 'Verify'
}

export enum MassActionRequestContext {
  Member = 'Member',
  MemberInvitation = 'MemberInvitation',
  ModerationItem = 'ModerationItem',
  Post = 'Post',
  Space = 'Space',
  Tag = 'Tag'
}

export type MassActionRequestExtraPropertiesInput = {
  badgeIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  includeReplies?: InputMaybe<Scalars['Boolean']['input']>;
  postTypeId?: InputMaybe<Scalars['ID']['input']>;
  removeAllTags?: InputMaybe<Scalars['Boolean']['input']>;
  spaceId?: InputMaybe<Scalars['ID']['input']>;
  tagIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  tagNames?: InputMaybe<Array<Scalars['ID']['input']>>;
  updatePostProperties?: InputMaybe<MassActionUpdatePostPropertiesInput>;
};

export type MassActionRequestInput = {
  action: MassActionRequestAction;
  context: MassActionRequestContext;
  extraProperties?: InputMaybe<MassActionRequestExtraPropertiesInput>;
  filters: MassActionFilters;
  waitForConfirmation?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum MassActionRequestStatus {
  Done = 'Done',
  Failed = 'Failed',
  InProgress = 'InProgress',
  Initialized = 'Initialized',
  WaitingForConfirmation = 'WaitingForConfirmation'
}

export type MassActionUpdatePostPropertiesInput = {
  ownerId?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type MatchFilterInput = {
  any?: InputMaybe<Array<Scalars['String']['input']>>;
  containsText?: InputMaybe<Scalars['String']['input']>;
  doesNotContainText?: InputMaybe<Scalars['String']['input']>;
  except?: InputMaybe<Array<Scalars['String']['input']>>;
  geoBoundingBox?: InputMaybe<GeoBoundingBoxInput>;
  geoRadius?: InputMaybe<GeoRadiusInput>;
  is?: InputMaybe<Scalars['String']['input']>;
  isEmpty?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['String']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  key: Scalars['String']['input'];
  range?: InputMaybe<RangeInput>;
  valuesCount?: InputMaybe<ValuesCountInput>;
};

export type Media = Emoji | File | Glyph | Image;

export type MediaBase = {
  __typename?: 'MediaBase';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  purgeRequestedAt: Scalars['DateTime']['output'];
  purgedAt: Scalars['DateTime']['output'];
  remoteUrl?: Maybe<Scalars['String']['output']>;
  status: MediaStatus;
  type: MediaType;
  uploaded: Scalars['Boolean']['output'];
};

export type MediaLimits = {
  __typename?: 'MediaLimits';
  fileSizeLimit: Scalars['Float']['output'];
  fileTypesLimit: Array<Scalars['String']['output']>;
  imageSizeLimit: Scalars['Float']['output'];
  imageTypesLimit: Array<Scalars['String']['output']>;
};

export type MediaNetworkSettings = {
  __typename?: 'MediaNetworkSettings';
  fileSizeLimit: Scalars['Float']['output'];
  fileTypesLimit: Array<Scalars['String']['output']>;
  imageSizeLimit: Scalars['Float']['output'];
  imageTypesLimit: Array<Scalars['String']['output']>;
};

export enum MediaStatus {
  Ok = 'Ok',
  Pending = 'Pending',
  Removed = 'Removed'
}

export enum MediaType {
  Emoji = 'Emoji',
  File = 'File',
  Glyph = 'Glyph',
  Image = 'Image'
}

export type MediaUrls = {
  __typename?: 'MediaUrls';
  full: Scalars['String']['output'];
  large: Scalars['String']['output'];
  medium: Scalars['String']['output'];
  small: Scalars['String']['output'];
  thumb: Scalars['String']['output'];
};

export type Member = {
  __typename?: 'Member';
  activeSession?: Maybe<MemberSession>;
  /** @deprecated Has been replaced by locale field */
  attributes: MemberAttributes;
  authMemberProps?: Maybe<MemberAuthMemberProps>;
  badges?: Maybe<Array<MemberBadge>>;
  banner?: Maybe<Media>;
  bannerId?: Maybe<Scalars['ID']['output']>;
  blockedMemberIds?: Maybe<Array<Scalars['String']['output']>>;
  blockedMembers?: Maybe<Array<Member>>;
  createdAt: Scalars['DateTime']['output'];
  /** @deprecated Has been replaced with name */
  displayName?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  emailStatus?: Maybe<MemberEmailStatus>;
  externalId?: Maybe<Scalars['ID']['output']>;
  externalUrl?: Maybe<Scalars['String']['output']>;
  extraProperties?: Maybe<Array<ExtraProperty>>;
  fields?: Maybe<Array<CustomField>>;
  flagged: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  lastSeen?: Maybe<Scalars['DateTime']['output']>;
  lastSeenAt?: Maybe<Scalars['DateTime']['output']>;
  locale: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
  network?: Maybe<Network>;
  networkId: Scalars['ID']['output'];
  newEmail?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the teammate field instead */
  overrideTeammate?: Maybe<Scalars['Boolean']['output']>;
  profilePicture?: Maybe<Media>;
  profilePictureId?: Maybe<Scalars['ID']['output']>;
  relativeUrl?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Role>;
  roleId: Scalars['ID']['output'];
  score?: Maybe<Scalars['Int']['output']>;
  sessions?: Maybe<Array<MemberSession>>;
  settings?: Maybe<MemberSettings>;
  shortcuts?: Maybe<Array<Shortcut>>;
  spaces?: Maybe<PaginatedSpace>;
  staffReasons?: Maybe<Array<StaffReason>>;
  status: MemberStatus;
  subscribersCount?: Maybe<Scalars['Int']['output']>;
  tagline?: Maybe<Scalars['String']['output']>;
  teammate: Scalars['Boolean']['output'];
  timeZone?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  url?: Maybe<Scalars['String']['output']>;
  username: Scalars['String']['output'];
  verifiedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type MemberExtraPropertiesArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type MemberSpacesArgs = {
  exploreOnly?: InputMaybe<Scalars['Boolean']['input']>;
  limit: Scalars['Int']['input'];
};

export type MemberAttributes = {
  __typename?: 'MemberAttributes';
  locale: Scalars['String']['output'];
};

export type MemberAuthMemberProps = {
  __typename?: 'MemberAuthMemberProps';
  canSendPrivateMessages?: Maybe<Scalars['Boolean']['output']>;
  context: PermissionContext;
  permissions?: Maybe<Array<ActionPermissions>>;
  scopes?: Maybe<Array<Scalars['String']['output']>>;
  subscribed?: Maybe<Scalars['Boolean']['output']>;
};

export type MemberBadge = {
  __typename?: 'MemberBadge';
  backgroundColor?: Maybe<Scalars['String']['output']>;
  badge?: Maybe<Badge>;
  badgeId: Scalars['ID']['output'];
  image?: Maybe<Media>;
  imageId?: Maybe<Scalars['ID']['output']>;
  longDescription?: Maybe<Scalars['String']['output']>;
  shortDescription: Scalars['String']['output'];
  text?: Maybe<Scalars['String']['output']>;
  textColor?: Maybe<Scalars['String']['output']>;
  type: BadgeType;
};

export type MemberEdge = {
  __typename?: 'MemberEdge';
  cursor: Scalars['String']['output'];
  node: Member;
};

export enum MemberEmailStatus {
  NotDelivered = 'notDelivered',
  Sent = 'sent',
  Spammed = 'spammed',
  Verified = 'verified'
}

export type MemberForSpaceInvitation = {
  __typename?: 'MemberForSpaceInvitation';
  member: Member;
  memberId: Scalars['ID']['output'];
  spaceAffiliation: SpaceMemberAffiliation;
};

export type MemberInvitation = {
  __typename?: 'MemberInvitation';
  createdAt: Scalars['DateTime']['output'];
  emailLog?: Maybe<EmailLog>;
  emailLogs?: Maybe<Array<EmailLog>>;
  expiresAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  invitationMessage?: Maybe<Scalars['String']['output']>;
  invitee?: Maybe<Member>;
  inviteeEmail: Scalars['String']['output'];
  inviteeId?: Maybe<Scalars['ID']['output']>;
  inviteeName?: Maybe<Scalars['String']['output']>;
  inviter?: Maybe<Member>;
  inviterId?: Maybe<Scalars['ID']['output']>;
  joinedAt?: Maybe<Scalars['DateTime']['output']>;
  network?: Maybe<Network>;
  networkId: Scalars['ID']['output'];
  role?: Maybe<Role>;
  roleId: Scalars['ID']['output'];
  status: MemberInvitationStatus;
};

export type MemberInvitationEdge = {
  __typename?: 'MemberInvitationEdge';
  cursor: Scalars['String']['output'];
  node: MemberInvitation;
};

export type MemberInvitationFilterByInput = {
  key: Scalars['String']['input'];
  operator: MemberInvitationFilterByOperator;
  value: Scalars['String']['input'];
};

export enum MemberInvitationFilterByOperator {
  Contains = 'contains',
  Equals = 'equals',
  Gt = 'gt',
  Gte = 'gte',
  Lt = 'lt',
  Lte = 'lte',
  Not = 'not'
}

export type MemberInvitationLink = {
  __typename?: 'MemberInvitationLink';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  inviter?: Maybe<Member>;
  link: Scalars['String']['output'];
  network?: Maybe<Network>;
};

export enum MemberInvitationStatus {
  Expired = 'Expired',
  Pending = 'Pending',
  Revoked = 'Revoked',
  Accepted = 'accepted',
  Delivered = 'delivered',
  NotDelivered = 'notDelivered',
  NotSent = 'notSent',
  Rejected = 'rejected',
  Sent = 'sent',
  Spammed = 'spammed'
}

export type MemberListFilterBy = {
  __typename?: 'MemberListFilterBy';
  key: Scalars['String']['output'];
  operator: MemberListFilterByOperator;
  value: Scalars['String']['output'];
};

export type MemberListFilterByInput = {
  key: Scalars['String']['input'];
  operator: MemberListFilterByOperator;
  value: Scalars['String']['input'];
};

export enum MemberListFilterByOperator {
  Contains = 'contains',
  EndsWith = 'endsWith',
  Equals = 'equals',
  Gt = 'gt',
  Gte = 'gte',
  HasValue = 'hasValue',
  In = 'in',
  Lt = 'lt',
  Lte = 'lte',
  Nin = 'nin',
  Not = 'not',
  StartsWith = 'startsWith'
}

export type MemberPermissionsSettingsInput = {
  canDeleteAccount: Scalars['Boolean']['input'];
};

export type MemberPrivateMessagingSettings = {
  __typename?: 'MemberPrivateMessagingSettings';
  privateMessagingEnabled: Scalars['Boolean']['output'];
};

export type MemberPrivateMessagingSettingsInput = {
  privateMessagingEnabled: Scalars['Boolean']['input'];
};

export type MemberSession = {
  __typename?: 'MemberSession';
  active: Scalars['Boolean']['output'];
  country?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  deviceBrand?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  ip: Scalars['String']['output'];
  lastActivityAt: Scalars['DateTime']['output'];
  os?: Maybe<Scalars['String']['output']>;
  osVersion?: Maybe<Scalars['String']['output']>;
};

export type MemberSettings = {
  __typename?: 'MemberSettings';
  privateMessaging?: Maybe<MemberPrivateMessagingSettings>;
};

export type MemberSettingsInput = {
  privateMessaging?: InputMaybe<MemberPrivateMessagingSettingsInput>;
};

export enum MemberStatus {
  Blocked = 'BLOCKED',
  Deleted = 'DELETED',
  Removed = 'REMOVED',
  Suspended = 'Suspended',
  Unverified = 'UNVERIFIED',
  Verified = 'VERIFIED'
}

export enum MemberStatusInput {
  Blocked = 'BLOCKED',
  Suspended = 'Suspended',
  Unverified = 'UNVERIFIED',
  Verified = 'VERIFIED'
}

export type MembersPermissionSettings = {
  __typename?: 'MembersPermissionSettings';
  canDeleteAccount: Scalars['Boolean']['output'];
};

export type Migration = {
  __typename?: 'Migration';
  id: Scalars['ID']['output'];
  networkId: Scalars['ID']['output'];
  requesterId: Scalars['ID']['output'];
  stage: MigrationStage;
  status: MigrationStatus;
};

export type MigrationFieldError = {
  __typename?: 'MigrationFieldError';
  field: Scalars['String']['output'];
  message: Scalars['String']['output'];
};

export type MigrationFileResult = {
  __typename?: 'MigrationFileResult';
  file: Scalars['String']['output'];
  insertedRows: Scalars['Int']['output'];
  rowErrors: Array<MigrationRowErrors>;
  skippedRows: Scalars['Int']['output'];
};

export type MigrationRowErrors = {
  __typename?: 'MigrationRowErrors';
  externalId?: Maybe<Scalars['String']['output']>;
  fieldErrors: Array<MigrationFieldError>;
  message: Scalars['String']['output'];
  rowNumber: Scalars['Int']['output'];
};

export enum MigrationStage {
  Media = 'MEDIA',
  Member = 'MEMBER',
  Post = 'POST',
  Space = 'SPACE',
  SpaceMember = 'SPACE_MEMBER',
  Tag = 'TAG'
}

export enum MigrationStatus {
  Done = 'DONE',
  InProgress = 'IN_PROGRESS'
}

export enum ModerationEntityType {
  Member = 'MEMBER',
  Post = 'POST'
}

export type ModerationItem = {
  __typename?: 'ModerationItem';
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  entity?: Maybe<ModerationItemEntity>;
  flaggedBy: FlaggedType;
  id: Scalars['String']['output'];
  memberId?: Maybe<Scalars['String']['output']>;
  moderator?: Maybe<Member>;
  reporters?: Maybe<PaginatedModerationItemReporter>;
  spaceId?: Maybe<Scalars['String']['output']>;
  status: ModerationStatus;
  updatedAt: Scalars['DateTime']['output'];
};


export type ModerationItemReportersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ModerationItemEdge = {
  __typename?: 'ModerationItemEdge';
  cursor: Scalars['String']['output'];
  node: ModerationItem;
};

export type ModerationItemEntity = Member | Post;

export type ModerationItemReporter = {
  __typename?: 'ModerationItemReporter';
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  reportCategory: ReportCategory;
  reporter?: Maybe<Member>;
  updatedAt: Scalars['DateTime']['output'];
};

export type ModerationItemReporterEdge = {
  __typename?: 'ModerationItemReporterEdge';
  cursor: Scalars['String']['output'];
  node: ModerationItemReporter;
};

export type ModerationMemberSettings = {
  __typename?: 'ModerationMemberSettings';
  minimumHoursToPost: Scalars['Int']['output'];
  minimumHoursToReply: Scalars['Int']['output'];
};

export type ModerationMemberSettingsInput = {
  minimumHoursToPost: Scalars['Int']['input'];
  minimumHoursToReply: Scalars['Int']['input'];
};

export enum ModerationOpMode {
  Purge = 'Purge',
  Retain = 'Retain'
}

export type ModerationSettings = {
  __typename?: 'ModerationSettings';
  akismet: Scalars['Boolean']['output'];
  blackListPostTypeIds: Array<Scalars['String']['output']>;
  blackListSpaceIds: Array<Scalars['String']['output']>;
  customBlacklist?: Maybe<Array<Scalars['String']['output']>>;
  enableBlacklisting: Scalars['Boolean']['output'];
  member: ModerationMemberSettings;
  oopSpam: Scalars['Boolean']['output'];
  preventPublish: Scalars['Boolean']['output'];
  useDefaultBlacklisting?: Maybe<Scalars['Boolean']['output']>;
};

export enum ModerationStatus {
  Accepted = 'ACCEPTED',
  PendingConfirmation = 'PendingConfirmation',
  Rejected = 'REJECTED',
  Review = 'REVIEW'
}

export type Mutation = {
  __typename?: 'Mutation';
  /** @deprecated Use Glyphs instead, just update the media id with `emoji/...` */
  addEmoji: Emoji;
  /** @deprecated Use Glyphs instead, just update the media id with `emoji/...` */
  addEmojis: Array<Emoji>;
  /** Add the FCM token to the subscriber settings. */
  addFcmTokenToSubscriberSettings: Action;
  /** @deprecated This mutation will be replaced by createCollection */
  addGroup: Collection;
  /** @deprecated This mutation will be replaced by createImages */
  addImage: SignedUrl;
  /** @deprecated This mutation will be replaced by createImages */
  addImages: Array<SignedUrl>;
  /** @deprecated This mutation will be replaced by createImages or createEmojis */
  addMedias: Array<SignedUrl>;
  addMemberSchemaField: Network;
  /** @deprecated This mutation will be replaced by createModerationReport */
  addModerationReport: ModerationItem;
  /** @deprecated This mutation will be replaced by createNetwork */
  addNetwork: AuthTokenWithOtp;
  /** @deprecated This mutation will be replaced by updateNewDomain */
  addNewDomain: DomainTransferStatus;
  /** @deprecated This mutation will be replaced by createPost */
  addPost: Post;
  addPostTypeField: PostType;
  addReaction: Action;
  /** @deprecated This mutation will be replaced by createReply */
  addReply: Post;
  /** @deprecated This mutation will be replaced by createSpace */
  addSpace: Space;
  addSpaceMembers: Array<SpaceMember>;
  addTemplateToNetwork: TemplateRequest;
  /** @deprecated This mutation is for the old billing */
  addTrialPlan?: Maybe<Plan>;
  /** @deprecated This mutation will be replaced by approveSpaceMembershipRequest */
  approveSpaceJoinRequest: Action;
  approveSpaceMembershipRequest: Action;
  archiveMemberSchemaField: Network;
  archivePostType: PostType;
  archivePostTypeField: PostType;
  assignBadge: Action;
  blockMember: Action;
  callback: CallbackResponse;
  cancelDomainTransfer: Action;
  cancelEmailUpdate: Action;
  cancelNetworkDeletion: Action;
  changeHomepage: Action;
  changeNetworkSubscriptionPlan: Network;
  clearNewDomain: Action;
  clearNotificationsCount: Action;
  closeSpace: Action;
  commitDomainTransfer: Action;
  confirmMassActionRequest: MassActionRequest;
  confirmResetPassword: Action;
  createAccessGroup: AccessGroup;
  createBadge: Badge;
  createBillingPortalSession: BillingPortalSession;
  createCollection: Collection;
  /** @deprecated Use Glyphs instead, just update the media id with `emoji/...` */
  createEmojis: Array<Emoji>;
  createExportMemberRequest: Export;
  createFiles: Array<SignedUrl>;
  createImages: Array<SignedUrl>;
  createMassActionRequest: MassActionRequest;
  createModerationReport: ModerationItem;
  createNetwork: AuthTokenWithOtp;
  createPermission: Permission;
  /** Create a new post in a space. */
  createPost: Post;
  /** Create a new post type. */
  createPostType: PostType;
  createReply: Post;
  /** @deprecated This mutation will be replaced by createModerationReport */
  createReport: ModerationItem;
  /** Create a space inside your community. */
  createSpace: Space;
  createSpaceFromTemplate: TemplateRequest;
  createSubscriptionCheckoutSession: SubscriptionCheckoutSession;
  /** Create a new tag */
  createTag: Tag;
  createTemplate: Template;
  /** @deprecated This mutation will be replaced by declineSpaceMembershipRequest */
  declineSpaceJoinRequest: Action;
  declineSpaceMembershipRequest: Action;
  deleteAccessGroup: Action;
  deleteBadge: Action;
  deleteCollection: Action;
  deleteMember: Action;
  deleteMemberSchemaField: Network;
  deleteNetwork: Action;
  deleteNotification: Action;
  deleteNotifications: Action;
  deletePageCustomResponse: Action;
  deletePermission: Action;
  deletePost: Action;
  deletePostTypeField: PostType;
  deleteSpace: Action;
  deleteSpacePostTypes: Action;
  deleteSsoMembership: Action;
  deleteTag: Action;
  deleteTemplate: Action;
  /** @deprecated This mutation will be replaced by updatePasswordWithToken */
  doResetPassword: Action;
  /** @deprecated This mutation will be replaced by updateImage */
  editImage: Image;
  /** @deprecated This mutation is for the old billing */
  extendCurrentTrial?: Maybe<Plan>;
  /** @deprecated Use the global gateway instead */
  globalAddAppCollaborator: AppCollaborator;
  /** @deprecated Use the global gateway instead */
  globalCreateApp: App;
  /** @deprecated Use Glyphs instead, just update the media id with `emoji/...` */
  globalCreateEmojis: Array<Emoji>;
  /** @deprecated Use the global gateway instead */
  globalCreateImages: Array<SignedUrl>;
  /** @deprecated Use the global gateway instead */
  globalDeleteApp: Action;
  /** @deprecated Use the global gateway instead */
  globalDeleteAppSetting: AppSetting;
  /** @deprecated Use the global gateway instead */
  globalPublishAppPrivately: AppPublication;
  /** @deprecated Use the global gateway instead */
  globalRegenerateClientSecret: App;
  /** @deprecated Use the global gateway instead */
  globalRemoveAppCollaborator: Action;
  /** @deprecated Use the global gateway instead */
  globalTestAppWebhook: Action;
  /** @deprecated Use the global gateway instead */
  globalUnPublishAppPrivately: Action;
  /** @deprecated Use the global gateway instead */
  globalUpdateApp: App;
  /** @deprecated Use the global gateway instead */
  globalUpdateAppSetting: AppSetting;
  hidePost: Action;
  impersonateLoginToNetwork: AuthInfoWithOtp;
  installApp: AppInstallation;
  installAppOnAuthMember: AppInstallation;
  interactWithApps: Array<AppInteraction>;
  /** Invite members to join your community. */
  inviteMembers: Array<MemberInvitation>;
  joinNetwork: AuthToken;
  joinNetworkWithInvitationLink: AuthToken;
  joinNetworkWithToken: AuthToken;
  joinSpace: Action;
  leaveSpace: Action;
  loginNetwork: AuthToken;
  loginNetworkWithPassword: AuthToken;
  loginWithSamlResponse: AuthToken;
  loginWithSsoCode: AuthToken;
  logoutMemberSessions: Action;
  logoutNetwork: Action;
  modifySubscriptionAddon: Action;
  movePost: Post;
  movePosts: Array<Post>;
  nominateNewDomain: Action;
  organizeCollections: Action;
  /** @deprecated This mutation will be replaced by organizeSpacesInCollection */
  organizeGroupSpaces: Action;
  /** @deprecated This mutation will be replaced by organizeCollections */
  organizeGroups: Action;
  organizeSpacesInCollection: Action;
  pinPostToSpace: Action;
  pinReplyToPost: Action;
  publishAppPrivately: AppPublication;
  publishTemplate: Action;
  /** @deprecated Use new billing APIs */
  purchase?: Maybe<BillingSubscription>;
  purgeMedias: Array<MediaBase>;
  readNotification: Action;
  readNotifications: Action;
  readSpace: Action;
  /** Remove the FCM token from the subscriber settings. */
  removeFcmTokenFromSubscriberSettings: Action;
  /** @deprecated This mutation will be replaced by deleteCollection */
  removeGroup: Action;
  /** @deprecated This mutation will be replaced by deleteMember */
  removeMember: Action;
  /** @deprecated This mutation will be replaced by deleteNetwork */
  removeNetwork: Action;
  /** @deprecated This mutation will be replaced by deletePost */
  removePost: Action;
  removeReaction: Action;
  removeSpaceMembers: Array<Action>;
  /** Reorder a single badge, moving it directly after the badge with specified using previousBadgeId or to the beginning of the list if not provided */
  reorderBadge: Badge;
  /** Reorder all badges for the network, using the badgeOrderId input field */
  reorderBadges: Action;
  reorderMemberSchemaFields: Network;
  reorderPostTypeFields: PostType;
  /** @deprecated Use the global gateway instead */
  requestGlobalTokenCode: Action;
  requestSpaceMembership: SpaceJoinRequest;
  /** @deprecated Use the global gateway instead */
  resendGlobalTokenCode: Action;
  resendMemberInvitation: Action;
  resendVerification: Action;
  /** @deprecated This mutation will be replaced by sendResetPasswordEmail */
  resetPassword: Action;
  revokeBadge: Action;
  revokeMemberInvitation: Action;
  runMigration: Migration;
  sendEmailDigestPreview: Action;
  sendResetPasswordEmail: Action;
  setPrivatelyPublishedApps: Array<AppPublication>;
  /** @deprecated This mutation will be replaced by loginWithSsoCode */
  ssoRedirect: AuthToken;
  /** Subscribe the auth member to the given publisher. */
  subscribe: Action;
  /** @deprecated This mutation will be replaced by loginSupportWithSsoCode */
  supportSsoRedirect: SupportAuthToken;
  suspendMember: Action;
  syncTemplate: Template;
  transferToNewDomain: Action;
  unArchiveMemberSchemaField: Network;
  unPublishAppPrivately: ActionStatus;
  unarchivePostType: PostType;
  unarchivePostTypeField: PostType;
  unblockMember: Action;
  unhidePost: Action;
  uninstallApp?: Maybe<AppInstallation>;
  unpinPostFromSpace: Action;
  unpinReplyFromPost: Action;
  unpublishTemplate: Action;
  unsetHomepage: Action;
  /** Unsubscribe the auth member from the given publisher. */
  unsubscribe: Action;
  unsubscribeFromNotification: Action;
  unsuspendMember: Action;
  updateAccessGroup: AccessGroup;
  updateAppInstallation: AppInstallation;
  updateAppNetworkSettings: AppAction;
  updateAppSpaceSetting: AppAction;
  updateAppStanding: ActionStatus;
  updateAppStatus: ActionStatus;
  updateAuthMember: Member;
  updateBadge: Badge;
  /** @deprecated Use new billing APIs */
  updateBillingDetails?: Maybe<BillingDetails>;
  updateCollection: Action;
  updateCustomSso: Sso;
  updateDefaultSsoStatus: Action;
  updateFile: File;
  /** @deprecated This mutation will be replaced by updateCollection */
  updateGroup: Action;
  updateImage: Image;
  updateJwtSso: Sso;
  updateMember: Member;
  updateMemberInvitation: MemberInvitation;
  /** @deprecated This mutation will be replaced by updateMember */
  updateMemberPrivateMessagingSettings: MemberPrivateMessagingSettings;
  updateMemberSchemaField: Network;
  updateMemberSpaceRole: Action;
  /** @deprecated This mutation will be replaced by updateModerationItem */
  updateModeration: Action;
  updateModerationItem: Action;
  updateModerationSettings: ModerationSettings;
  updateNetwork: Network;
  updateNetworkAvailableLocales: Network;
  updateNetworkCustomCapacities: Network;
  updateNetworkDomainSubfolder: Network;
  updateNetworkMediaSettings: MediaNetworkSettings;
  updateNetworkNotificationSettings: NotificationNetworkSettings;
  updateNetworkStatus: Action;
  updateNewDomain: DomainTransferStatus;
  updatePasswordWithToken: Action;
  updatePermission: Permission;
  updatePost: Post;
  updatePostType: PostType;
  updatePostTypeField: PostType;
  /** @deprecated This mutation will be replaced by updateNetwork */
  updatePrivateMessagingSettings: PrivateMessagingSettings;
  /** Update the publisher settings for the given publisher. */
  updatePublisherSettings: Action;
  updateSpace: Space;
  updateSpaceHighlightedTags: Action;
  /** @deprecated This mutation will be replaced by updateMemberSpaceRole */
  updateSpaceMemberRole: Action;
  updateSpacePostTypes: Array<SpacePostType>;
  /** Update the subscriber settings for the auth member. */
  updateSubscriberSettings: Action;
  updateSubscriptionInterval: Action;
  updateSubscriptionPlan: Action;
  updateTag: Tag;
  updateTemplate: Template;
  uploadMigrationFiles: UploadedMigrations;
  upsertExtraProperty: Action;
  upsertPageCustomResponse: PageDetailedCustomResponse;
  upsertTheme: NewTheme;
  verifyMember: AuthToken;
};


export type MutationAddEmojiArgs = {
  input: CreateEmojiInput;
};


export type MutationAddEmojisArgs = {
  input: Array<CreateEmojiInput>;
};


export type MutationAddFcmTokenToSubscriberSettingsArgs = {
  token: Scalars['String']['input'];
};


export type MutationAddGroupArgs = {
  input: CreateCollectionInput;
};


export type MutationAddImageArgs = {
  input: CreateImageInput;
};


export type MutationAddImagesArgs = {
  input: Array<CreateImageInput>;
};


export type MutationAddMediasArgs = {
  input: AddMediasInput;
};


export type MutationAddMemberSchemaFieldArgs = {
  input: CustomFieldSchemaInput;
};


export type MutationAddModerationReportArgs = {
  input: CreateReportInput;
};


export type MutationAddNetworkArgs = {
  input: AddNetworkInput;
};


export type MutationAddNewDomainArgs = {
  input: DomainAvailabilityInput;
};


export type MutationAddPostArgs = {
  input: CreatePostInput;
  spaceId: Scalars['ID']['input'];
};


export type MutationAddPostTypeFieldArgs = {
  id: Scalars['ID']['input'];
  input: CustomFieldSchemaInput;
};


export type MutationAddReactionArgs = {
  input: AddReactionInput;
  postId: Scalars['ID']['input'];
};


export type MutationAddReplyArgs = {
  input: CreatePostInput;
  postId: Scalars['ID']['input'];
};


export type MutationAddSpaceArgs = {
  input: CreateSpaceInput;
};


export type MutationAddSpaceMembersArgs = {
  input: Array<AddSpaceMemberInput>;
  spaceId: Scalars['ID']['input'];
};


export type MutationAddTemplateToNetworkArgs = {
  excludeEntityTypes?: InputMaybe<Array<TemplateEntityType>>;
  templateId: Scalars['String']['input'];
};


export type MutationAddTrialPlanArgs = {
  trial: AddTrialInput;
};


export type MutationApproveSpaceJoinRequestArgs = {
  spaceId: Scalars['ID']['input'];
  spaceJoinRequestId: Scalars['ID']['input'];
};


export type MutationApproveSpaceMembershipRequestArgs = {
  spaceId: Scalars['ID']['input'];
  spaceMembershipRequestId: Scalars['ID']['input'];
};


export type MutationArchiveMemberSchemaFieldArgs = {
  key: Scalars['String']['input'];
};


export type MutationArchivePostTypeArgs = {
  id: Scalars['ID']['input'];
};


export type MutationArchivePostTypeFieldArgs = {
  id: Scalars['ID']['input'];
  key: Scalars['String']['input'];
};


export type MutationAssignBadgeArgs = {
  id: Scalars['String']['input'];
  input: AssignOrRevokeBadgeInput;
};


export type MutationBlockMemberArgs = {
  memberId: Scalars['String']['input'];
};


export type MutationCallbackArgs = {
  appId: Scalars['ID']['input'];
  callbackId: Scalars['ID']['input'];
  context: PermissionContext;
  dynamicBlockId?: InputMaybe<Scalars['ID']['input']>;
  entityId?: InputMaybe<Scalars['ID']['input']>;
  inputs?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCancelEmailUpdateArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationChangeHomepageArgs = {
  spaceId: Scalars['String']['input'];
  type?: InputMaybe<HomeSpaceType>;
};


export type MutationChangeNetworkSubscriptionPlanArgs = {
  name: PlanName;
};


export type MutationCloseSpaceArgs = {
  spaceId: Scalars['ID']['input'];
};


export type MutationConfirmMassActionRequestArgs = {
  massActionRequestId: Scalars['String']['input'];
};


export type MutationConfirmResetPasswordArgs = {
  input: ConfirmResetPasswordInput;
};


export type MutationCreateAccessGroupArgs = {
  input: CreateAccessGroupInput;
};


export type MutationCreateBadgeArgs = {
  input: CreateBadgeInput;
};


export type MutationCreateBillingPortalSessionArgs = {
  returnUrl: Scalars['String']['input'];
};


export type MutationCreateCollectionArgs = {
  input: CreateCollectionInput;
};


export type MutationCreateEmojisArgs = {
  input: Array<CreateEmojiInput>;
};


export type MutationCreateExportMemberRequestArgs = {
  input: ExportInput;
};


export type MutationCreateFilesArgs = {
  input: Array<CreateFileInput>;
};


export type MutationCreateImagesArgs = {
  input: Array<CreateImageInput>;
};


export type MutationCreateMassActionRequestArgs = {
  input: MassActionRequestInput;
};


export type MutationCreateModerationReportArgs = {
  input: CreateReportInput;
};


export type MutationCreateNetworkArgs = {
  input: AddNetworkInput;
};


export type MutationCreatePermissionArgs = {
  input: CreatePermissionInput;
};


export type MutationCreatePostArgs = {
  input: CreatePostInput;
  spaceId: Scalars['ID']['input'];
};


export type MutationCreatePostTypeArgs = {
  input: CreatePostTypeInput;
};


export type MutationCreateReplyArgs = {
  input: CreatePostInput;
  postId: Scalars['ID']['input'];
};


export type MutationCreateReportArgs = {
  input: CreateReportInput;
};


export type MutationCreateSpaceArgs = {
  input: CreateSpaceInput;
};


export type MutationCreateSpaceFromTemplateArgs = {
  excludeEntityTypes?: InputMaybe<Array<TemplateEntityType>>;
  input: CreateSpaceInput;
  style?: InputMaybe<Scalars['String']['input']>;
  templateId: Scalars['String']['input'];
};


export type MutationCreateSubscriptionCheckoutSessionArgs = {
  cancelUrl: Scalars['String']['input'];
  priceId: Scalars['String']['input'];
  successUrl: Scalars['String']['input'];
};


export type MutationCreateTagArgs = {
  input: CreateTagInput;
};


export type MutationCreateTemplateArgs = {
  input: CreateTemplateInput;
};


export type MutationDeclineSpaceJoinRequestArgs = {
  spaceId: Scalars['ID']['input'];
  spaceJoinRequestId: Scalars['ID']['input'];
};


export type MutationDeclineSpaceMembershipRequestArgs = {
  spaceId: Scalars['ID']['input'];
  spaceMembershipRequestId: Scalars['ID']['input'];
};


export type MutationDeleteAccessGroupArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteBadgeArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteCollectionArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteMemberArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteMemberSchemaFieldArgs = {
  key: Scalars['String']['input'];
};


export type MutationDeleteNotificationArgs = {
  notificationId: Scalars['ID']['input'];
};


export type MutationDeleteNotificationsArgs = {
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
};


export type MutationDeletePageCustomResponseArgs = {
  path: Scalars['String']['input'];
};


export type MutationDeletePermissionArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeletePostArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeletePostTypeFieldArgs = {
  id: Scalars['ID']['input'];
  key: Scalars['String']['input'];
};


export type MutationDeleteSpaceArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteSpacePostTypesArgs = {
  postTypeIds: Array<Scalars['ID']['input']>;
  spaceId: Scalars['ID']['input'];
};


export type MutationDeleteSsoMembershipArgs = {
  memberId: Scalars['String']['input'];
  type: SsoType;
};


export type MutationDeleteTagArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteTemplateArgs = {
  id: Scalars['String']['input'];
};


export type MutationDoResetPasswordArgs = {
  input: UpdatePasswordWithTokenInput;
};


export type MutationEditImageArgs = {
  imageId: Scalars['String']['input'];
  input: UpdateImageInput;
};


export type MutationExtendCurrentTrialArgs = {
  newEndDate: Scalars['DateTime']['input'];
};


export type MutationGlobalAddAppCollaboratorArgs = {
  appId: Scalars['String']['input'];
  input: AddAppCollaboratorInput;
};


export type MutationGlobalCreateAppArgs = {
  input: CreateAppInput;
};


export type MutationGlobalCreateEmojisArgs = {
  input: Array<CreateEmojiInput>;
};


export type MutationGlobalCreateImagesArgs = {
  input: Array<CreateImageInput>;
};


export type MutationGlobalDeleteAppArgs = {
  id: Scalars['ID']['input'];
};


export type MutationGlobalDeleteAppSettingArgs = {
  context: PermissionContext;
  entityId?: InputMaybe<Scalars['ID']['input']>;
  networkId: Scalars['ID']['input'];
};


export type MutationGlobalPublishAppPrivatelyArgs = {
  appId: Scalars['ID']['input'];
  networkId: Scalars['ID']['input'];
};


export type MutationGlobalRegenerateClientSecretArgs = {
  appId: Scalars['ID']['input'];
};


export type MutationGlobalRemoveAppCollaboratorArgs = {
  appId: Scalars['String']['input'];
  collaboratorId: Scalars['String']['input'];
};


export type MutationGlobalTestAppWebhookArgs = {
  appId: Scalars['ID']['input'];
  input: TestAppWebhookInput;
};


export type MutationGlobalUnPublishAppPrivatelyArgs = {
  appId: Scalars['ID']['input'];
  networkId: Scalars['ID']['input'];
};


export type MutationGlobalUpdateAppArgs = {
  id: Scalars['ID']['input'];
  input: UpdateAppInput;
};


export type MutationGlobalUpdateAppSettingArgs = {
  context: PermissionContext;
  entityId?: InputMaybe<Scalars['ID']['input']>;
  networkId: Scalars['ID']['input'];
  settings: Scalars['String']['input'];
};


export type MutationHidePostArgs = {
  id: Scalars['ID']['input'];
};


export type MutationImpersonateLoginToNetworkArgs = {
  input: ImpersonateLoginToNetworkInput;
};


export type MutationInstallAppArgs = {
  appId: Scalars['ID']['input'];
  input?: InputMaybe<InstallAppInput>;
};


export type MutationInstallAppOnAuthMemberArgs = {
  appId: Scalars['ID']['input'];
  input?: InputMaybe<InstallAppInput>;
};


export type MutationInteractWithAppsArgs = {
  context: PermissionContext;
  entityId?: InputMaybe<Scalars['ID']['input']>;
  input: Array<InteractWithAppInput>;
};


export type MutationInviteMembersArgs = {
  input: InviteMembersInput;
};


export type MutationJoinNetworkArgs = {
  input: JoinNetworkInput;
};


export type MutationJoinNetworkWithInvitationLinkArgs = {
  input: JoinNetworkWithLinkInput;
};


export type MutationJoinNetworkWithTokenArgs = {
  input: JoinNetworkWithTokenInput;
};


export type MutationJoinSpaceArgs = {
  spaceId: Scalars['ID']['input'];
};


export type MutationLeaveSpaceArgs = {
  spaceId: Scalars['ID']['input'];
};


export type MutationLoginNetworkArgs = {
  input: LoginNetworkWithPasswordInput;
};


export type MutationLoginNetworkWithPasswordArgs = {
  input: LoginNetworkWithPasswordInput;
};


export type MutationLoginWithSamlResponseArgs = {
  input: LoginWithSamlResponseInput;
};


export type MutationLoginWithSsoCodeArgs = {
  input: LoginWithSsoCodeInput;
};


export type MutationLogoutMemberSessionsArgs = {
  memberId: Scalars['String']['input'];
};


export type MutationLogoutNetworkArgs = {
  input?: InputMaybe<LogoutNetworkInput>;
};


export type MutationModifySubscriptionAddonArgs = {
  priceId: Scalars['String']['input'];
  quantity: Scalars['Float']['input'];
};


export type MutationMovePostArgs = {
  convertPost?: InputMaybe<ConvertPostInput>;
  id: Scalars['ID']['input'];
  sendNotification?: InputMaybe<Scalars['Boolean']['input']>;
  spaceId: Scalars['ID']['input'];
};


export type MutationMovePostsArgs = {
  convertPost?: InputMaybe<ConvertPostInput>;
  ids: Array<Scalars['ID']['input']>;
  sendNotification?: InputMaybe<Scalars['Boolean']['input']>;
  spaceId: Scalars['ID']['input'];
};


export type MutationNominateNewDomainArgs = {
  domain: Scalars['String']['input'];
};


export type MutationOrganizeCollectionsArgs = {
  ids: Array<Scalars['String']['input']>;
};


export type MutationOrganizeGroupSpacesArgs = {
  groupId: Scalars['String']['input'];
  spaceIds: Array<Scalars['String']['input']>;
};


export type MutationOrganizeGroupsArgs = {
  groupIds: Array<Scalars['String']['input']>;
};


export type MutationOrganizeSpacesInCollectionArgs = {
  collectionId: Scalars['String']['input'];
  spaceIds: Array<Scalars['String']['input']>;
};


export type MutationPinPostToSpaceArgs = {
  postId: Scalars['ID']['input'];
};


export type MutationPinReplyToPostArgs = {
  postId: Scalars['ID']['input'];
  replyId: Scalars['ID']['input'];
};


export type MutationPublishAppPrivatelyArgs = {
  appId: Scalars['ID']['input'];
};


export type MutationPublishTemplateArgs = {
  id: Scalars['String']['input'];
};


export type MutationPurchaseArgs = {
  input: PurchaseInput;
};


export type MutationPurgeMediasArgs = {
  input: PurgeMediasInput;
};


export type MutationReadNotificationArgs = {
  notificationId: Scalars['ID']['input'];
};


export type MutationReadNotificationsArgs = {
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
};


export type MutationReadSpaceArgs = {
  date: Scalars['DateTime']['input'];
  spaceId: Scalars['String']['input'];
};


export type MutationRemoveFcmTokenFromSubscriberSettingsArgs = {
  token: Scalars['String']['input'];
};


export type MutationRemoveGroupArgs = {
  groupId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationRemoveMemberArgs = {
  memberId: Scalars['ID']['input'];
};


export type MutationRemovePostArgs = {
  postId: Scalars['ID']['input'];
};


export type MutationRemoveReactionArgs = {
  participantId?: InputMaybe<Scalars['String']['input']>;
  postId: Scalars['ID']['input'];
  reaction: Scalars['String']['input'];
};


export type MutationRemoveSpaceMembersArgs = {
  memberIds: Array<Scalars['ID']['input']>;
  spaceId: Scalars['ID']['input'];
};


export type MutationReorderBadgeArgs = {
  id: Scalars['String']['input'];
  input: ReorderBadgeInput;
};


export type MutationReorderBadgesArgs = {
  input: ReorderBadgesInput;
};


export type MutationReorderMemberSchemaFieldsArgs = {
  input: Array<ReOrderSchemaFieldInput>;
};


export type MutationReorderPostTypeFieldsArgs = {
  id: Scalars['ID']['input'];
  input: Array<ReOrderSchemaFieldInput>;
};


export type MutationRequestGlobalTokenCodeArgs = {
  input: RequestGlobalTokenInput;
};


export type MutationRequestSpaceMembershipArgs = {
  spaceId: Scalars['ID']['input'];
};


export type MutationResendGlobalTokenCodeArgs = {
  input: RequestGlobalTokenInput;
};


export type MutationResendMemberInvitationArgs = {
  id: Scalars['ID']['input'];
};


export type MutationResetPasswordArgs = {
  input: ResetPasswordInput;
};


export type MutationRevokeBadgeArgs = {
  id: Scalars['String']['input'];
  input: AssignOrRevokeBadgeInput;
};


export type MutationRevokeMemberInvitationArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRunMigrationArgs = {
  id: Scalars['String']['input'];
};


export type MutationSendEmailDigestPreviewArgs = {
  memberId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationSendResetPasswordEmailArgs = {
  email: Scalars['String']['input'];
};


export type MutationSetPrivatelyPublishedAppsArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationSsoRedirectArgs = {
  input: LoginWithSsoCodeInput;
};


export type MutationSubscribeArgs = {
  publisherId: Scalars['String']['input'];
};


export type MutationSupportSsoRedirectArgs = {
  input: LoginSupportWithSsoCodeInput;
};


export type MutationSuspendMemberArgs = {
  memberId: Scalars['String']['input'];
};


export type MutationSyncTemplateArgs = {
  id: Scalars['String']['input'];
  upsertKey?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUnArchiveMemberSchemaFieldArgs = {
  key: Scalars['String']['input'];
};


export type MutationUnPublishAppPrivatelyArgs = {
  appId: Scalars['ID']['input'];
  networkId: Scalars['ID']['input'];
};


export type MutationUnarchivePostTypeArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUnarchivePostTypeFieldArgs = {
  id: Scalars['ID']['input'];
  key: Scalars['String']['input'];
};


export type MutationUnblockMemberArgs = {
  memberId: Scalars['String']['input'];
};


export type MutationUnhidePostArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUninstallAppArgs = {
  appInstallationId: Scalars['ID']['input'];
  reason?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUnpinPostFromSpaceArgs = {
  postId: Scalars['ID']['input'];
};


export type MutationUnpinReplyFromPostArgs = {
  postId: Scalars['ID']['input'];
  replyId: Scalars['ID']['input'];
};


export type MutationUnpublishTemplateArgs = {
  id: Scalars['String']['input'];
};


export type MutationUnsetHomepageArgs = {
  type: HomeSpaceType;
};


export type MutationUnsubscribeArgs = {
  publisherId: Scalars['String']['input'];
};


export type MutationUnsubscribeFromNotificationArgs = {
  input: UnsubscribeWithTokenInput;
};


export type MutationUnsuspendMemberArgs = {
  memberId: Scalars['String']['input'];
};


export type MutationUpdateAccessGroupArgs = {
  id: Scalars['ID']['input'];
  input: UpdateAccessGroupInput;
};


export type MutationUpdateAppInstallationArgs = {
  appInstallationId: Scalars['ID']['input'];
  input: UpdateAppInstallationInput;
};


export type MutationUpdateAppNetworkSettingsArgs = {
  appId: Scalars['ID']['input'];
  settings: Scalars['String']['input'];
};


export type MutationUpdateAppSpaceSettingArgs = {
  appId: Scalars['ID']['input'];
  settings: Scalars['String']['input'];
  spaceId: Scalars['ID']['input'];
};


export type MutationUpdateAppStandingArgs = {
  appId: Scalars['ID']['input'];
  standing: StoreItemStanding;
};


export type MutationUpdateAppStatusArgs = {
  appId: Scalars['ID']['input'];
  status: StoreItemStatus;
};


export type MutationUpdateAuthMemberArgs = {
  input: UpdateMemberInput;
};


export type MutationUpdateBadgeArgs = {
  id: Scalars['String']['input'];
  input: UpdateBadgeInput;
};


export type MutationUpdateBillingDetailsArgs = {
  input: BillingDetailsInput;
};


export type MutationUpdateCollectionArgs = {
  id: Scalars['ID']['input'];
  input: UpdateCollectionInput;
};


export type MutationUpdateCustomSsoArgs = {
  input: UpdateCustomSsoInput;
};


export type MutationUpdateDefaultSsoStatusArgs = {
  sso: DefaultSsoType;
  status: SsoStatus;
};


export type MutationUpdateFileArgs = {
  id: Scalars['String']['input'];
  input: UpdateFileInput;
};


export type MutationUpdateGroupArgs = {
  groupId?: InputMaybe<Scalars['ID']['input']>;
  input: UpdateCollectionInput;
};


export type MutationUpdateImageArgs = {
  id: Scalars['String']['input'];
  input: UpdateImageInput;
};


export type MutationUpdateJwtSsoArgs = {
  input: UpdateJwtSsoInput;
};


export type MutationUpdateMemberArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  input: UpdateMemberInput;
};


export type MutationUpdateMemberInvitationArgs = {
  id: Scalars['ID']['input'];
  input: UpdateMemberInvitationInput;
};


export type MutationUpdateMemberPrivateMessagingSettingsArgs = {
  input: UpdateMemberPrivateMessagingSettingsInput;
};


export type MutationUpdateMemberSchemaFieldArgs = {
  input: UpdateCustomFieldSchemaInput;
};


export type MutationUpdateMemberSpaceRoleArgs = {
  input: UpdateSpaceMemberRoleInput;
  memberId: Scalars['ID']['input'];
  spaceId: Scalars['ID']['input'];
};


export type MutationUpdateModerationArgs = {
  id: Scalars['ID']['input'];
  input: UpdateModerationItemInput;
};


export type MutationUpdateModerationItemArgs = {
  id: Scalars['ID']['input'];
  input: UpdateModerationItemInput;
};


export type MutationUpdateModerationSettingsArgs = {
  input: UpdateModerationSettingsInput;
};


export type MutationUpdateNetworkArgs = {
  input: UpdateNetworkInput;
};


export type MutationUpdateNetworkAvailableLocalesArgs = {
  availableLocales: Array<Scalars['String']['input']>;
};


export type MutationUpdateNetworkCustomCapacitiesArgs = {
  additionalSeats?: InputMaybe<Scalars['Int']['input']>;
  customMemberCapacity?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateNetworkDomainSubfolderArgs = {
  domainSubfolder?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateNetworkMediaSettingsArgs = {
  input: UpdateMediaNetworkSettingsInput;
};


export type MutationUpdateNetworkNotificationSettingsArgs = {
  input: UpdateNotificationNetworkSettingsInput;
};


export type MutationUpdateNetworkStatusArgs = {
  input: UpdateNetworkStatusInput;
};


export type MutationUpdateNewDomainArgs = {
  input: UpdateNewDomainInput;
};


export type MutationUpdatePasswordWithTokenArgs = {
  input: UpdatePasswordWithTokenInput;
};


export type MutationUpdatePermissionArgs = {
  id: Scalars['ID']['input'];
  input: UpdatePermissionInput;
};


export type MutationUpdatePostArgs = {
  id: Scalars['ID']['input'];
  input: UpdatePostInput;
};


export type MutationUpdatePostTypeArgs = {
  id: Scalars['ID']['input'];
  input: UpdatePostTypeInput;
};


export type MutationUpdatePostTypeFieldArgs = {
  id: Scalars['ID']['input'];
  input: UpdateCustomFieldSchemaInput;
};


export type MutationUpdatePrivateMessagingSettingsArgs = {
  input: UpdatePrivateMessagingSettingsInput;
};


export type MutationUpdatePublisherSettingsArgs = {
  input: UpdatePublisherInput;
  publisherId: Scalars['String']['input'];
};


export type MutationUpdateSpaceArgs = {
  id: Scalars['ID']['input'];
  input: UpdateSpaceInput;
};


export type MutationUpdateSpaceHighlightedTagsArgs = {
  input: UpdateHighlightedTags;
  spaceId: Scalars['ID']['input'];
};


export type MutationUpdateSpaceMemberRoleArgs = {
  input: UpdateSpaceMemberRoleInput;
  memberId: Scalars['ID']['input'];
  spaceId: Scalars['ID']['input'];
};


export type MutationUpdateSpacePostTypesArgs = {
  input: Array<UpdateSpacePostTypeInput>;
  spaceId: Scalars['ID']['input'];
};


export type MutationUpdateSubscriberSettingsArgs = {
  input: UpdateSubscriberInput;
};


export type MutationUpdateSubscriptionIntervalArgs = {
  interval: BillingPriceInterval;
};


export type MutationUpdateSubscriptionPlanArgs = {
  priceId: Scalars['String']['input'];
};


export type MutationUpdateTagArgs = {
  id: Scalars['ID']['input'];
  input: UpdateTagInput;
};


export type MutationUpdateTemplateArgs = {
  id: Scalars['String']['input'];
  input: UpdateTemplateInput;
};


export type MutationUploadMigrationFilesArgs = {
  baseUrl?: InputMaybe<Scalars['String']['input']>;
  changeMemberEmails?: InputMaybe<Scalars['Boolean']['input']>;
  dryRun?: InputMaybe<Scalars['Boolean']['input']>;
  members?: InputMaybe<Scalars['Upload']['input']>;
  migrationId?: InputMaybe<Scalars['String']['input']>;
  posts?: InputMaybe<Scalars['Upload']['input']>;
  spaces?: InputMaybe<Scalars['Upload']['input']>;
};


export type MutationUpsertExtraPropertyArgs = {
  input: UpsertExtraPropertyInput;
};


export type MutationUpsertPageCustomResponseArgs = {
  input: UpsertPageCustomResponse;
  path: Scalars['String']['input'];
};


export type MutationUpsertThemeArgs = {
  input: UpsertTheme;
};


export type MutationVerifyMemberArgs = {
  input: VerifyMemberInput;
};

export type NativeFieldsTemplates = {
  __typename?: 'NativeFieldsTemplates';
  description?: Maybe<Scalars['String']['output']>;
  thumbnailId?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type NativeFieldsTemplatesInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  thumbnailId?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type NavigationItem = {
  __typename?: 'NavigationItem';
  link?: Maybe<Scalars['String']['output']>;
  openInNewWindow?: Maybe<Scalars['Boolean']['output']>;
  text: Scalars['String']['output'];
  type: NavigationItemType;
};

export enum NavigationItemType {
  PrimaryButton = 'PRIMARY_BUTTON',
  PrimaryLink = 'PRIMARY_LINK',
  SecondaryButton = 'SECONDARY_BUTTON',
  TextLink = 'TEXT_LINK'
}

export type NavigationSlateUpdatesInput = {
  footer?: InputMaybe<SlateUpdatesInput>;
  footerDisabled?: InputMaybe<Scalars['Boolean']['input']>;
  footerFixed?: InputMaybe<Scalars['Boolean']['input']>;
  header?: InputMaybe<SlateUpdatesInput>;
  headerDisabled?: InputMaybe<Scalars['Boolean']['input']>;
  headerFixed?: InputMaybe<Scalars['Boolean']['input']>;
  sidebar1?: InputMaybe<SlateUpdatesInput>;
  sidebar1Disabled?: InputMaybe<Scalars['Boolean']['input']>;
  sidebar1Fixed?: InputMaybe<Scalars['Boolean']['input']>;
  sidebar2?: InputMaybe<SlateUpdatesInput>;
  sidebar2Disabled?: InputMaybe<Scalars['Boolean']['input']>;
  sidebar2Fixed?: InputMaybe<Scalars['Boolean']['input']>;
};

export type NavigationSlates = {
  __typename?: 'NavigationSlates';
  footer?: Maybe<Slate>;
  footerDisabled?: Maybe<Scalars['Boolean']['output']>;
  footerFixed?: Maybe<Scalars['Boolean']['output']>;
  header: Slate;
  headerDisabled?: Maybe<Scalars['Boolean']['output']>;
  headerFixed?: Maybe<Scalars['Boolean']['output']>;
  sidebar1: Slate;
  sidebar1Disabled?: Maybe<Scalars['Boolean']['output']>;
  sidebar1Fixed?: Maybe<Scalars['Boolean']['output']>;
  sidebar2?: Maybe<Slate>;
  sidebar2Disabled?: Maybe<Scalars['Boolean']['output']>;
  sidebar2Fixed?: Maybe<Scalars['Boolean']['output']>;
};

export type Network = {
  __typename?: 'Network';
  activeSso?: Maybe<ActiveSso>;
  activeTheme?: Maybe<NewTheme>;
  /** @deprecated Has been moved to usageLimits */
  additionalSeatsCapacity?: Maybe<Scalars['Int']['output']>;
  aliases: Array<Scalars['String']['output']>;
  authMemberProps?: Maybe<NetworkAuthMemberProps>;
  availableLocales: Array<Scalars['String']['output']>;
  badges?: Maybe<Array<Badge>>;
  /** @deprecated It will be stored on Stripe. */
  billingEmail?: Maybe<Scalars['String']['output']>;
  /** Has been replaced by activeTheme, but some may still use it */
  brandColor?: Maybe<Scalars['String']['output']>;
  /** @deprecated Has been moved to extraProperties */
  companyName?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Member>;
  createdById: Scalars['ID']['output'];
  customCodes?: Maybe<Array<CustomCode>>;
  /** @deprecated Has been moved to usageLimits */
  customMemberCapacity?: Maybe<Scalars['Int']['output']>;
  customSeoDetail?: Maybe<CustomSeoDetail>;
  defaultSpaces?: Maybe<Array<Space>>;
  description?: Maybe<Scalars['String']['output']>;
  domain: Scalars['String']['output'];
  domainSubfolder?: Maybe<Scalars['String']['output']>;
  extraProperties?: Maybe<Array<ExtraProperty>>;
  favicon?: Maybe<Media>;
  faviconId?: Maybe<Scalars['ID']['output']>;
  /** @deprecated Has been replaced by navigation slates */
  footer?: Maybe<Footer>;
  /** @deprecated Has been moved to extraProperties */
  hideDefaultAuthenticationForm: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  images?: Maybe<NetworkImages>;
  incidentEmails?: Maybe<Array<Scalars['String']['output']>>;
  /** @deprecated Has been moved to extraProperties */
  industry?: Maybe<NetworkIndustryType>;
  /** @deprecated This field is deprecated. */
  landingPages?: Maybe<NetworkSettings>;
  limits?: Maybe<NetworkLimits>;
  limitsUpdatedAt?: Maybe<Scalars['DateTime']['output']>;
  locale: Scalars['String']['output'];
  logo?: Maybe<Media>;
  logoId?: Maybe<Scalars['ID']['output']>;
  /** @deprecated This resolver will be replaced by limits */
  mediaLimits?: Maybe<MediaLimits>;
  /** @deprecated This resolver will be replaced by settings */
  mediaSettings?: Maybe<MediaNetworkSettings>;
  /**
   * Calculated member capacity
   * @deprecated Has been moved to usageLimits
   */
  memberCapacity?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Has been moved to usageLimits */
  memberCapacityDeclared?: Maybe<Scalars['Int']['output']>;
  memberFields?: Maybe<CustomFieldsSchema>;
  members?: Maybe<PaginatedMember>;
  membersCount?: Maybe<Scalars['Int']['output']>;
  membership: NetworkMembership;
  name: Scalars['String']['output'];
  navigationSlates: NavigationSlates;
  newDomain?: Maybe<Scalars['String']['output']>;
  /** @deprecated This resolver will be replaced by settings */
  notificationSettings?: Maybe<NotificationNetworkSettings>;
  organizationId?: Maybe<Scalars['String']['output']>;
  overUsedAt?: Maybe<Scalars['DateTime']['output']>;
  owner?: Maybe<Member>;
  ownerId: Scalars['ID']['output'];
  passwordComplexity: NetworkPasswordComplexity;
  planName: Scalars['String']['output'];
  postTypes?: Maybe<Array<PostType>>;
  /** @deprecated Has been moved to extraProperties */
  privacyPolicyUrl?: Maybe<Scalars['String']['output']>;
  referralLink?: Maybe<Scalars['String']['output']>;
  referralProgramEnabled: Scalars['Boolean']['output'];
  /** @deprecated Has been moved to extraProperties */
  releaseChannel?: Maybe<NetworkReleaseChannelType>;
  roles?: Maybe<Array<Role>>;
  /** @deprecated Has been moved to usageLimits */
  seatCapacityDeclared?: Maybe<Scalars['Int']['output']>;
  /**
   * Calculated seats capacity
   * @deprecated Has been moved to usageLimits
   */
  seatsCapacity?: Maybe<Scalars['Int']['output']>;
  settings?: Maybe<Settings>;
  shortcuts?: Maybe<Array<Shortcut>>;
  spaces?: Maybe<PaginatedSpace>;
  status: NetworkStatus;
  statusLocked: Scalars['Boolean']['output'];
  statusReason?: Maybe<StatusReason>;
  /** @deprecated Use planName instead. */
  subscriptionPlan?: Maybe<Plan>;
  systemSpaces?: Maybe<Array<Space>>;
  /** @deprecated Has been moved to extraProperties */
  termsOfServiceUrl?: Maybe<Scalars['String']['output']>;
  /** Has been replaced by activeTheme, but some may still use "themes" */
  themes?: Maybe<Themes>;
  /** @deprecated Has been replaced by navigation slates */
  topNavigation?: Maybe<TopNavigation>;
  tribeBranding: Scalars['Boolean']['output'];
  usages?: Maybe<NetworkUsages>;
  visibility: NetworkVisibility;
  whoCanInvite?: Maybe<Array<Role>>;
  whoCanInviteIds: Array<Scalars['ID']['output']>;
  willUnpublishAt?: Maybe<Scalars['DateTime']['output']>;
};


export type NetworkCustomCodesArgs = {
  anonymize: Scalars['Boolean']['input'];
};


export type NetworkExtraPropertiesArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type NetworkMembersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<Array<MemberStatusInput>>;
};


export type NetworkPostTypesArgs = {
  context?: InputMaybe<PostTypeContext>;
};


export type NetworkSpacesArgs = {
  limit: Scalars['Int']['input'];
};

export type NetworkAuthMemberProps = {
  __typename?: 'NetworkAuthMemberProps';
  context: PermissionContext;
  permissions?: Maybe<Array<ActionPermissions>>;
  /** @deprecated This field will be replaced by Member.settings */
  privateMessagingEnabled?: Maybe<Scalars['Boolean']['output']>;
  scopes?: Maybe<Array<Scalars['String']['output']>>;
  totalUnreadPostsCount?: Maybe<Scalars['Int']['output']>;
};


export type NetworkAuthMemberPropsTotalUnreadPostsCountArgs = {
  type?: InputMaybe<Array<SpaceType>>;
};

export type NetworkCurrentUsages = {
  __typename?: 'NetworkCurrentUsages';
  aiSearchAccess?: Maybe<Scalars['Boolean']['output']>;
  analyticsAccess?: Maybe<Scalars['Boolean']['output']>;
  analyticsDaysLimit?: Maybe<Scalars['Float']['output']>;
  apiAccess?: Maybe<Scalars['Boolean']['output']>;
  apiRequestCapacity?: Maybe<Array<ApiRequestLimit>>;
  appIds?: Maybe<Array<Scalars['String']['output']>>;
  auditLogAccess?: Maybe<Scalars['Boolean']['output']>;
  customDomain?: Maybe<Scalars['Boolean']['output']>;
  emailCustomization?: Maybe<Scalars['Boolean']['output']>;
  jwtSSOAccess?: Maybe<Scalars['Boolean']['output']>;
  membersCapacity?: Maybe<Scalars['Float']['output']>;
  monthlyEmailCapacity?: Maybe<Scalars['Float']['output']>;
  monthlyVisitorCapacity?: Maybe<Scalars['Float']['output']>;
  oauth2SSOAccess?: Maybe<Scalars['Boolean']['output']>;
  postTypesCapacity?: Maybe<Scalars['Float']['output']>;
  samlSSOAccess?: Maybe<Scalars['Boolean']['output']>;
  seatsCapacity?: Maybe<Scalars['Float']['output']>;
  sitemap?: Maybe<Scalars['Boolean']['output']>;
  spacesCapacity?: Maybe<Scalars['Float']['output']>;
  storageCapacity?: Maybe<Scalars['Float']['output']>;
  translationLocaleCapacity?: Maybe<Scalars['Float']['output']>;
};

export type NetworkImages = {
  __typename?: 'NetworkImages';
  darkFavicon?: Maybe<Media>;
  darkLogo?: Maybe<Media>;
  darkMobileLogo?: Maybe<Media>;
  lightFavicon?: Maybe<Media>;
  lightLogo?: Maybe<Media>;
  lightMobileLogo?: Maybe<Media>;
};

export type NetworkImagesInput = {
  darkFaviconId?: InputMaybe<Scalars['String']['input']>;
  darkLogoId?: InputMaybe<Scalars['String']['input']>;
  darkMobileLogoId?: InputMaybe<Scalars['String']['input']>;
  lightFaviconId?: InputMaybe<Scalars['String']['input']>;
  lightLogoId?: InputMaybe<Scalars['String']['input']>;
  lightMobileLogoId?: InputMaybe<Scalars['String']['input']>;
};

export enum NetworkIndustryType {
  BloggerCoachCreator = 'BloggerCoachCreator',
  ConsultingAndAgency = 'ConsultingAndAgency',
  EcomerceAndRetail = 'EcomerceAndRetail',
  EntertainmentAndEvents = 'EntertainmentAndEvents',
  FinancianServices = 'FinancianServices',
  Healthcare = 'Healthcare',
  InternetAndOnlineService = 'InternetAndOnlineService',
  MediaAndPublishing = 'MediaAndPublishing',
  NonProfitAndAssociation = 'NonProfitAndAssociation',
  OnlineTrainingAndEducation = 'OnlineTrainingAndEducation',
  Other = 'Other',
  SoftwareAndSaas = 'SoftwareAndSaas'
}

export enum NetworkLandingPage {
  Explore = 'EXPLORE',
  Feed = 'FEED',
  Spaces = 'SPACES'
}

export type NetworkLimits = {
  __typename?: 'NetworkLimits';
  analyticsLimits: AnalyticsLimits;
  fileSizeLimit: Scalars['Float']['output'];
  fileTypesLimit: Array<Scalars['String']['output']>;
  imageSizeLimit: Scalars['Float']['output'];
  imageTypesLimit: Array<Scalars['String']['output']>;
  usageLimits: NetworkUsageLimits;
};

export enum NetworkMembership {
  InviteOnly = 'inviteOnly',
  Open = 'open'
}

export enum NetworkPasswordComplexity {
  Complex = 'Complex',
  Simple = 'Simple',
  Standard = 'Standard'
}

export enum NetworkPrimaryMembersType {
  Customers = 'Customers',
  Employees = 'Employees',
  Members = 'Members',
  Other = 'Other',
  Students = 'Students'
}

export type NetworkPublicInfo = {
  __typename?: 'NetworkPublicInfo';
  domain: Scalars['String']['output'];
  domainSubfolder?: Maybe<Scalars['String']['output']>;
  favicon?: Maybe<Media>;
  faviconId?: Maybe<Scalars['ID']['output']>;
  id: Scalars['ID']['output'];
  images?: Maybe<NetworkImages>;
  jwtSsoAuthUrls?: Maybe<JwtSsoAuthUrls>;
  logo?: Maybe<Media>;
  logoId?: Maybe<Scalars['ID']['output']>;
  membership: NetworkMembership;
  name: Scalars['String']['output'];
  status: NetworkStatus;
  systemSpaces?: Maybe<Array<Space>>;
  visibility: NetworkVisibility;
};

export enum NetworkReleaseChannelType {
  Edge = 'edge',
  Stable = 'stable'
}

export type NetworkSettings = {
  __typename?: 'NetworkSettings';
  landingPageForGuest: NetworkLandingPage;
  landingPageForMember: NetworkLandingPage;
  landingPageForNewMember: NetworkLandingPage;
};

export type NetworkSettingsInput = {
  captcha?: InputMaybe<CaptchaSettingsInput>;
  contentTranslation?: InputMaybe<ContentTranslationSettingsInput>;
  memberPermissions?: InputMaybe<MemberPermissionsSettingsInput>;
  privateMessaging?: InputMaybe<PrivateMessagingSettingsInput>;
};

export enum NetworkStatus {
  Archived = 'archived',
  Published = 'published',
  Unpublished = 'unpublished'
}

export enum NetworkStatusChangedBy {
  Admin = 'admin',
  Support = 'support',
  System = 'system'
}

export enum NetworkStatusReason {
  MemberCapacityExceeded = 'memberCapacityExceeded',
  NetworkCreated = 'networkCreated',
  NetworkLockLifted = 'networkLockLifted',
  SeatsCapacityExceeded = 'seatsCapacityExceeded',
  TrialEnded = 'trialEnded'
}

export enum NetworkTimeframeType {
  FewMonths = 'FewMonths',
  FewWeeks = 'FewWeeks',
  NotSure = 'NotSure',
  VerySoon = 'VerySoon'
}

export type NetworkUsageLimits = {
  __typename?: 'NetworkUsageLimits';
  aiSearchAccess?: Maybe<Scalars['Boolean']['output']>;
  analyticsAccess?: Maybe<Scalars['Boolean']['output']>;
  analyticsDaysLimit?: Maybe<Scalars['Float']['output']>;
  apiAccess?: Maybe<Scalars['Boolean']['output']>;
  apiRequestCapacity?: Maybe<Array<ApiRequestLimit>>;
  appIds?: Maybe<Array<Scalars['String']['output']>>;
  auditLogAccess?: Maybe<Scalars['Boolean']['output']>;
  customDomain?: Maybe<Scalars['Boolean']['output']>;
  emailCustomization?: Maybe<Scalars['Boolean']['output']>;
  jwtSSOAccess?: Maybe<Scalars['Boolean']['output']>;
  membersCapacity?: Maybe<Scalars['Float']['output']>;
  monthlyEmailCapacity?: Maybe<Scalars['Float']['output']>;
  monthlyVisitorCapacity?: Maybe<Scalars['Float']['output']>;
  oauth2SSOAccess?: Maybe<Scalars['Boolean']['output']>;
  postTypesCapacity?: Maybe<Scalars['Float']['output']>;
  samlSSOAccess?: Maybe<Scalars['Boolean']['output']>;
  seatsCapacity?: Maybe<Scalars['Float']['output']>;
  sitemap?: Maybe<Scalars['Boolean']['output']>;
  spacesCapacity?: Maybe<Scalars['Float']['output']>;
  storageCapacity?: Maybe<Scalars['Float']['output']>;
  translationLocaleCapacity?: Maybe<Scalars['Float']['output']>;
};

export type NetworkUsages = {
  __typename?: 'NetworkUsages';
  fileStorageUsage: Scalars['Float']['output'];
  imageStorageUsage: Scalars['Float']['output'];
  usages: NetworkCurrentUsages;
};

export enum NetworkVisibility {
  Private = 'private',
  Public = 'public'
}

export type NewTheme = {
  __typename?: 'NewTheme';
  colorTokens?: Maybe<ThemeColorTokens>;
  colors?: Maybe<ThemeColors>;
  id: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
  typography?: Maybe<Array<ThemeToken>>;
};

export type Notification = {
  __typename?: 'Notification';
  /** This field represents the member that triggered the event. However, for events such as 'post updated', 'post deleted', 'comment updated', 'comment deleted', or 'join request status updated', the actor field may be set to null. This is a privacy measure designed to prevent the exposure of potentially sensitive identities, such as moderators, who may be responsible for these actions. */
  actor?: Maybe<Payload>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  meta?: Maybe<NotificationMeta>;
  object?: Maybe<Payload>;
  read: Scalars['Boolean']['output'];
  space?: Maybe<Space>;
  summary?: Maybe<Scalars['String']['output']>;
  target?: Maybe<Payload>;
  verb: NotificationVerb;
};

export type NotificationEdge = {
  __typename?: 'NotificationEdge';
  cursor: Scalars['String']['output'];
  node: Notification;
};

export type NotificationMeta = {
  __typename?: 'NotificationMeta';
  body?: Maybe<Scalars['String']['output']>;
  fullTitle: Scalars['String']['output'];
  reason: NotificationReason;
  relativeUrl: Scalars['String']['output'];
  textBody?: Maybe<Scalars['String']['output']>;
  textFullTitle: Scalars['String']['output'];
  textTitle: Scalars['String']['output'];
  title: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type NotificationNetworkSettings = {
  __typename?: 'NotificationNetworkSettings';
  emailDigestEnabled: Scalars['Boolean']['output'];
  emailEnabled: Scalars['Boolean']['output'];
  emailFrom?: Maybe<Scalars['String']['output']>;
  emailNotificationEnabled: Scalars['Boolean']['output'];
};

export enum NotificationReason {
  NetworkAdmin = 'NETWORK_ADMIN',
  NetworkSubscription = 'NETWORK_SUBSCRIPTION',
  PostAuthor = 'POST_AUTHOR',
  PostSubscription = 'POST_SUBSCRIPTION',
  SpaceAdmin = 'SPACE_ADMIN',
  SpaceSubscription = 'SPACE_SUBSCRIPTION'
}

export type NotificationSubscription = {
  __typename?: 'NotificationSubscription';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  networkId: Scalars['String']['output'];
  publisher?: Maybe<Publisher>;
  publisherId: Scalars['String']['output'];
  subscriberId: Scalars['String']['output'];
};

export type NotificationSubscriptionEdge = {
  __typename?: 'NotificationSubscriptionEdge';
  cursor: Scalars['String']['output'];
  node: NotificationSubscription;
};

export enum NotificationTrigger {
  Mention = 'MENTION',
  Message = 'MESSAGE',
  Reaction = 'REACTION',
  Subscription = 'SUBSCRIPTION',
  System = 'SYSTEM'
}

export enum NotificationVerb {
  CommentCreated = 'COMMENT_CREATED',
  CommentDeleted = 'COMMENT_DELETED',
  CommentUpdated = 'COMMENT_UPDATED',
  JoinRequestStatusUpdated = 'JOIN_REQUEST_STATUS_UPDATED',
  MemberMentioned = 'MEMBER_MENTIONED',
  MessageCreated = 'MESSAGE_CREATED',
  PostCreated = 'POST_CREATED',
  PostDeleted = 'POST_DELETED',
  PostUpdated = 'POST_UPDATED',
  ReactionCreated = 'REACTION_CREATED'
}

export type NotificationsCount = {
  __typename?: 'NotificationsCount';
  new: Scalars['Float']['output'];
};

export enum NumberTypeOptions {
  Integer = 'integer',
  Number = 'number'
}

export type OAuthCode = {
  __typename?: 'OAuthCode';
  code: Scalars['String']['output'];
};

export type OAuthCodeInput = {
  clientId: Scalars['String']['input'];
  redirectUri: Scalars['String']['input'];
  scopes: Array<PrimaryScopes>;
};

export type OAuthTokenInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  refreshToken?: InputMaybe<Scalars['String']['input']>;
};

export type OAuthTokens = {
  __typename?: 'OAuthTokens';
  accessToken: Scalars['String']['output'];
  expiresIn: Scalars['Float']['output'];
  memberId: Scalars['String']['output'];
  refreshToken: Scalars['String']['output'];
};

export type Page = {
  __typename?: 'Page';
  customResponse?: Maybe<PageCustomResponse>;
  entity?: Maybe<PageEntity>;
  seoDetail: PageSeo;
  space: Space;
};

export type PageCustomResponse = {
  __typename?: 'PageCustomResponse';
  body: Scalars['String']['output'];
  headers: Array<PageCustomResponseHeader>;
  httpCode: Scalars['Int']['output'];
};

export type PageCustomResponseHeader = {
  __typename?: 'PageCustomResponseHeader';
  key: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type PageCustomResponseHeaderInput = {
  key: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type PageDetailedCustomResponse = {
  __typename?: 'PageDetailedCustomResponse';
  body: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  createdById?: Maybe<Scalars['String']['output']>;
  creatorType: CreatorType;
  headers: Array<PageCustomResponseHeader>;
  httpCode: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedById?: Maybe<Scalars['String']['output']>;
};

export type PageDetailedCustomResponseEdge = {
  __typename?: 'PageDetailedCustomResponseEdge';
  cursor: Scalars['String']['output'];
  node: PageDetailedCustomResponse;
};

export type PageEntity = Collection | Member | Post;

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
};

export type PageSeo = {
  __typename?: 'PageSeo';
  additionalMeta?: Maybe<Array<PageTag>>;
  description?: Maybe<Scalars['String']['output']>;
  jsonld?: Maybe<Scalars['String']['output']>;
  thumbnail?: Maybe<Media>;
  title: Scalars['String']['output'];
};

export enum PageSeoTagType {
  Link = 'LINK',
  Meta = 'META',
  Title = 'TITLE'
}

export type PageTag = {
  __typename?: 'PageTag';
  properties: Array<KeyValue>;
  type: PageSeoTagType;
};

export type PaginatedApp = {
  __typename?: 'PaginatedApp';
  edges?: Maybe<Array<AppEdge>>;
  nodes?: Maybe<Array<App>>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type PaginatedAppInstallation = {
  __typename?: 'PaginatedAppInstallation';
  edges?: Maybe<Array<AppInstallationEdge>>;
  nodes?: Maybe<Array<AppInstallation>>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type PaginatedDynamicBlock = {
  __typename?: 'PaginatedDynamicBlock';
  edges?: Maybe<Array<DynamicBlockEdge>>;
  nodes?: Maybe<Array<DynamicBlock>>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type PaginatedEmailLog = {
  __typename?: 'PaginatedEmailLog';
  edges?: Maybe<Array<EmailLogEdge>>;
  nodes?: Maybe<Array<EmailLog>>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type PaginatedExport = {
  __typename?: 'PaginatedExport';
  edges?: Maybe<Array<ExportEdge>>;
  nodes?: Maybe<Array<Export>>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type PaginatedMember = {
  __typename?: 'PaginatedMember';
  edges?: Maybe<Array<MemberEdge>>;
  nodes?: Maybe<Array<Member>>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type PaginatedMemberInvitation = {
  __typename?: 'PaginatedMemberInvitation';
  edges?: Maybe<Array<MemberInvitationEdge>>;
  nodes?: Maybe<Array<MemberInvitation>>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type PaginatedModeration = {
  __typename?: 'PaginatedModeration';
  edges?: Maybe<Array<ModerationItemEdge>>;
  nodes?: Maybe<Array<ModerationItem>>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type PaginatedModerationItemReporter = {
  __typename?: 'PaginatedModerationItemReporter';
  edges?: Maybe<Array<ModerationItemReporterEdge>>;
  nodes?: Maybe<Array<ModerationItemReporter>>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type PaginatedNetwork = {
  __typename?: 'PaginatedNetwork';
  edges?: Maybe<Array<PluralNetworkEdge>>;
  nodes?: Maybe<Array<PluralNetwork>>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type PaginatedNotification = {
  __typename?: 'PaginatedNotification';
  edges?: Maybe<Array<NotificationEdge>>;
  nodes?: Maybe<Array<Notification>>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type PaginatedNotificationSubscriptions = {
  __typename?: 'PaginatedNotificationSubscriptions';
  edges?: Maybe<Array<NotificationSubscriptionEdge>>;
  nodes?: Maybe<Array<NotificationSubscription>>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type PaginatedPageCustomResponse = {
  __typename?: 'PaginatedPageCustomResponse';
  edges?: Maybe<Array<PageDetailedCustomResponseEdge>>;
  nodes?: Maybe<Array<PageDetailedCustomResponse>>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type PaginatedPluralMember = {
  __typename?: 'PaginatedPluralMember';
  edges?: Maybe<Array<PluralMemberEdge>>;
  nodes?: Maybe<Array<PluralMember>>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type PaginatedPost = {
  __typename?: 'PaginatedPost';
  edges?: Maybe<Array<PostEdge>>;
  nodes?: Maybe<Array<Post>>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type PaginatedPostReactionParticipant = {
  __typename?: 'PaginatedPostReactionParticipant';
  edges?: Maybe<Array<PostReactionParticipantEdge>>;
  nodes?: Maybe<Array<PostReactionParticipant>>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type PaginatedPostType = {
  __typename?: 'PaginatedPostType';
  edges?: Maybe<Array<PostTypeEdge>>;
  nodes?: Maybe<Array<PostType>>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type PaginatedSitemap = {
  __typename?: 'PaginatedSitemap';
  edges?: Maybe<Array<SitemapEdge>>;
  nodes?: Maybe<Array<Sitemap>>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type PaginatedSpace = {
  __typename?: 'PaginatedSpace';
  edges?: Maybe<Array<SpaceEdge>>;
  nodes?: Maybe<Array<Space>>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type PaginatedSpaceJoinRequest = {
  __typename?: 'PaginatedSpaceJoinRequest';
  edges?: Maybe<Array<SpaceJoinRequestEdge>>;
  nodes?: Maybe<Array<SpaceJoinRequest>>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type PaginatedSpaceMember = {
  __typename?: 'PaginatedSpaceMember';
  edges?: Maybe<Array<SpaceMemberEdge>>;
  nodes?: Maybe<Array<SpaceMember>>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type PaginatedSpacePostType = {
  __typename?: 'PaginatedSpacePostType';
  edges?: Maybe<Array<SpacePostTypeEdge>>;
  nodes?: Maybe<Array<SpacePostType>>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type PaginatedTag = {
  __typename?: 'PaginatedTag';
  edges?: Maybe<Array<TagEdge>>;
  nodes?: Maybe<Array<Tag>>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type PaginatedTemplate = {
  __typename?: 'PaginatedTemplate';
  edges?: Maybe<Array<TemplateEdge>>;
  nodes?: Maybe<Array<Template>>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type PasswordComplexity = {
  __typename?: 'PasswordComplexity';
  complex: Scalars['Boolean']['output'];
};

export type PathPermissions = {
  __typename?: 'PathPermissions';
  isAuthorized: IsAuthorized;
  path: Scalars['String']['output'];
};

export type Payload = {
  __typename?: 'Payload';
  id: Scalars['ID']['output'];
  media?: Maybe<Media>;
  member?: Maybe<Member>;
  name?: Maybe<Scalars['String']['output']>;
  post?: Maybe<Post>;
  space?: Maybe<Space>;
  summary?: Maybe<Scalars['String']['output']>;
  type: PayloadType;
};

export enum PayloadType {
  JoinRequestStatus = 'JOIN_REQUEST_STATUS',
  Member = 'MEMBER',
  Network = 'NETWORK',
  Post = 'POST',
  Reaction = 'REACTION',
  Space = 'SPACE'
}

export type Permission = {
  __typename?: 'Permission';
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  scopes: Array<Scalars['String']['output']>;
};

export enum PermissionContext {
  Member = 'MEMBER',
  Network = 'NETWORK',
  Post = 'POST',
  Space = 'SPACE'
}

export type Permissions = {
  __typename?: 'Permissions';
  actions: Array<ActionPermissions>;
  contextAwareActions: Array<ContextPermissions>;
};

export type PermissionsContextInput = {
  context: PermissionContext;
  ids: Array<Scalars['String']['input']>;
};

export enum PinnedInto {
  Member = 'member',
  Network = 'network',
  Post = 'post',
  Space = 'space'
}

export type Plan = {
  __typename?: 'Plan';
  createdAt: Scalars['DateTime']['output'];
  endDate?: Maybe<Scalars['DateTime']['output']>;
  extendable: Scalars['Boolean']['output'];
  memberCapacity: Scalars['Int']['output'];
  name: PlanName;
  renewDate?: Maybe<Scalars['DateTime']['output']>;
  renewalType: PlanRenewalType;
  seatCapacity: Scalars['Int']['output'];
  startDate: Scalars['DateTime']['output'];
  trial: Scalars['Boolean']['output'];
};

export enum PlanName {
  Advanced = 'Advanced',
  Basic = 'Basic',
  Enterprise = 'Enterprise',
  Plus = 'Plus',
  PlusLegacy = 'PlusLegacy',
  Premium = 'Premium',
  PremiumLegacy = 'PremiumLegacy',
  Basic = 'basic',
  Enterprise = 'enterprise',
  Plus = 'plus',
  Premium = 'premium'
}

export enum PlanRenewalType {
  Month = 'month',
  Year = 'year'
}

export type PluralMember = {
  __typename?: 'PluralMember';
  activeSession?: Maybe<MemberSession>;
  /** @deprecated Has been replaced by locale field */
  attributes: MemberAttributes;
  authMemberProps?: Maybe<MemberAuthMemberProps>;
  badges?: Maybe<Array<MemberBadge>>;
  banner?: Maybe<Media>;
  bannerId?: Maybe<Scalars['ID']['output']>;
  blockedMemberIds?: Maybe<Array<Scalars['String']['output']>>;
  blockedMembers?: Maybe<Array<Member>>;
  createdAt: Scalars['DateTime']['output'];
  /** @deprecated Has been replaced with name */
  displayName?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  emailStatus?: Maybe<MemberEmailStatus>;
  externalId?: Maybe<Scalars['ID']['output']>;
  externalUrl?: Maybe<Scalars['String']['output']>;
  extraProperties?: Maybe<Array<ExtraProperty>>;
  fields?: Maybe<Array<CustomField>>;
  flagged: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  lastSeen?: Maybe<Scalars['DateTime']['output']>;
  lastSeenAt?: Maybe<Scalars['DateTime']['output']>;
  locale: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
  network?: Maybe<Network>;
  networkId: Scalars['ID']['output'];
  newEmail?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the teammate field instead */
  overrideTeammate?: Maybe<Scalars['Boolean']['output']>;
  profilePicture?: Maybe<Media>;
  profilePictureId?: Maybe<Scalars['ID']['output']>;
  relativeUrl?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Role>;
  roleId: Scalars['ID']['output'];
  score?: Maybe<Scalars['Int']['output']>;
  sessions?: Maybe<Array<MemberSession>>;
  settings?: Maybe<MemberSettings>;
  shortcuts?: Maybe<Array<Shortcut>>;
  spaces?: Maybe<PaginatedSpace>;
  staffReasons?: Maybe<Array<StaffReason>>;
  status: MemberStatus;
  subscribersCount?: Maybe<Scalars['Int']['output']>;
  tagline?: Maybe<Scalars['String']['output']>;
  teammate: Scalars['Boolean']['output'];
  timeZone?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  url?: Maybe<Scalars['String']['output']>;
  username: Scalars['String']['output'];
  verifiedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type PluralMemberExtraPropertiesArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type PluralMemberSpacesArgs = {
  exploreOnly?: InputMaybe<Scalars['Boolean']['input']>;
  limit: Scalars['Int']['input'];
};

export type PluralMemberEdge = {
  __typename?: 'PluralMemberEdge';
  cursor: Scalars['String']['output'];
  node: PluralMember;
};

export type PluralNetwork = {
  __typename?: 'PluralNetwork';
  activeSso?: Maybe<ActiveSso>;
  activeTheme?: Maybe<NewTheme>;
  /** @deprecated Has been moved to usageLimits */
  additionalSeatsCapacity?: Maybe<Scalars['Int']['output']>;
  aliases: Array<Scalars['String']['output']>;
  authMemberProps?: Maybe<NetworkAuthMemberProps>;
  availableLocales: Array<Scalars['String']['output']>;
  badges?: Maybe<Array<Badge>>;
  /** @deprecated It will be stored on Stripe. */
  billingEmail?: Maybe<Scalars['String']['output']>;
  /** Has been replaced by activeTheme, but some may still use it */
  brandColor?: Maybe<Scalars['String']['output']>;
  /** @deprecated Has been moved to extraProperties */
  companyName?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Member>;
  createdById: Scalars['ID']['output'];
  customCodes?: Maybe<Array<CustomCode>>;
  /** @deprecated Has been moved to usageLimits */
  customMemberCapacity?: Maybe<Scalars['Int']['output']>;
  customSeoDetail?: Maybe<CustomSeoDetail>;
  defaultSpaces?: Maybe<Array<Space>>;
  description?: Maybe<Scalars['String']['output']>;
  domain: Scalars['String']['output'];
  domainSubfolder?: Maybe<Scalars['String']['output']>;
  extraProperties?: Maybe<Array<ExtraProperty>>;
  favicon?: Maybe<Media>;
  faviconId?: Maybe<Scalars['ID']['output']>;
  /** @deprecated Has been replaced by navigation slates */
  footer?: Maybe<Footer>;
  globalFavicon?: Maybe<Media>;
  globalLogo?: Maybe<Media>;
  /** @deprecated Has been moved to extraProperties */
  hideDefaultAuthenticationForm: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  images?: Maybe<NetworkImages>;
  incidentEmails?: Maybe<Array<Scalars['String']['output']>>;
  /** @deprecated Has been moved to extraProperties */
  industry?: Maybe<NetworkIndustryType>;
  /** @deprecated This field is deprecated. */
  landingPages?: Maybe<NetworkSettings>;
  limits?: Maybe<NetworkLimits>;
  limitsUpdatedAt?: Maybe<Scalars['DateTime']['output']>;
  locale: Scalars['String']['output'];
  logo?: Maybe<Media>;
  logoId?: Maybe<Scalars['ID']['output']>;
  /** @deprecated This resolver will be replaced by limits */
  mediaLimits?: Maybe<MediaLimits>;
  /** @deprecated This resolver will be replaced by settings */
  mediaSettings?: Maybe<MediaNetworkSettings>;
  /**
   * Calculated member capacity
   * @deprecated Has been moved to usageLimits
   */
  memberCapacity?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Has been moved to usageLimits */
  memberCapacityDeclared?: Maybe<Scalars['Int']['output']>;
  memberFields?: Maybe<CustomFieldsSchema>;
  members?: Maybe<PaginatedMember>;
  membersCount?: Maybe<Scalars['Int']['output']>;
  membership: NetworkMembership;
  name: Scalars['String']['output'];
  navigationSlates: NavigationSlates;
  newDomain?: Maybe<Scalars['String']['output']>;
  /** @deprecated This resolver will be replaced by settings */
  notificationSettings?: Maybe<NotificationNetworkSettings>;
  organizationId?: Maybe<Scalars['String']['output']>;
  overUsedAt?: Maybe<Scalars['DateTime']['output']>;
  owner?: Maybe<Member>;
  ownerId: Scalars['ID']['output'];
  passwordComplexity: NetworkPasswordComplexity;
  planName: Scalars['String']['output'];
  postTypes?: Maybe<Array<PostType>>;
  /** @deprecated Has been moved to extraProperties */
  privacyPolicyUrl?: Maybe<Scalars['String']['output']>;
  referralLink?: Maybe<Scalars['String']['output']>;
  referralProgramEnabled: Scalars['Boolean']['output'];
  /** @deprecated Has been moved to extraProperties */
  releaseChannel?: Maybe<NetworkReleaseChannelType>;
  roles?: Maybe<Array<Role>>;
  /** @deprecated Has been moved to usageLimits */
  seatCapacityDeclared?: Maybe<Scalars['Int']['output']>;
  /**
   * Calculated seats capacity
   * @deprecated Has been moved to usageLimits
   */
  seatsCapacity?: Maybe<Scalars['Int']['output']>;
  settings?: Maybe<Settings>;
  shortcuts?: Maybe<Array<Shortcut>>;
  spaces?: Maybe<PaginatedSpace>;
  status: NetworkStatus;
  statusLocked: Scalars['Boolean']['output'];
  statusReason?: Maybe<StatusReason>;
  /** @deprecated Use planName instead. */
  subscriptionPlan?: Maybe<Plan>;
  systemSpaces?: Maybe<Array<Space>>;
  /** @deprecated Has been moved to extraProperties */
  termsOfServiceUrl?: Maybe<Scalars['String']['output']>;
  /** Has been replaced by activeTheme, but some may still use "themes" */
  themes?: Maybe<Themes>;
  /** @deprecated Has been replaced by navigation slates */
  topNavigation?: Maybe<TopNavigation>;
  tribeBranding: Scalars['Boolean']['output'];
  usages?: Maybe<NetworkUsages>;
  visibility: NetworkVisibility;
  whoCanInvite?: Maybe<Array<Role>>;
  whoCanInviteIds: Array<Scalars['ID']['output']>;
  willUnpublishAt?: Maybe<Scalars['DateTime']['output']>;
};


export type PluralNetworkCustomCodesArgs = {
  anonymize: Scalars['Boolean']['input'];
};


export type PluralNetworkExtraPropertiesArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type PluralNetworkMembersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<Array<MemberStatusInput>>;
};


export type PluralNetworkPostTypesArgs = {
  context?: InputMaybe<PostTypeContext>;
};


export type PluralNetworkSpacesArgs = {
  limit: Scalars['Int']['input'];
};

export type PluralNetworkEdge = {
  __typename?: 'PluralNetworkEdge';
  cursor: Scalars['String']['output'];
  node: PluralNetwork;
};

export type Post = {
  __typename?: 'Post';
  /** @deprecated Has been replaced by allowedReactions. */
  allowedEmojis?: Maybe<Array<Scalars['String']['output']>>;
  allowedReactions?: Maybe<Array<Scalars['String']['output']>>;
  attachmentIds: Array<Scalars['ID']['output']>;
  attachments?: Maybe<Array<File>>;
  authMemberProps?: Maybe<PostAuthMemberProps>;
  contentSummary?: Maybe<PostContentSummary>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<SpaceMember>;
  createdById: Scalars['ID']['output'];
  customSeoDetail?: Maybe<CustomSeoDetail>;
  description?: Maybe<Scalars['String']['output']>;
  embedIds: Array<Scalars['String']['output']>;
  embeds?: Maybe<Array<Embed>>;
  externalId?: Maybe<Scalars['ID']['output']>;
  externalUrl?: Maybe<Scalars['String']['output']>;
  fields?: Maybe<Array<CustomField>>;
  /** @deprecated Use "subscribersCount" instead */
  followersCount?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Has been replaced by allowedReactions. */
  forbiddenEmojis?: Maybe<Array<Scalars['String']['output']>>;
  forbiddenReactions?: Maybe<Array<Scalars['String']['output']>>;
  hasMoreContent: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  imageIds: Array<Scalars['ID']['output']>;
  images?: Maybe<Array<Media>>;
  isAnonymous: Scalars['Boolean']['output'];
  isHidden?: Maybe<Scalars['Boolean']['output']>;
  language?: Maybe<Scalars['String']['output']>;
  lastActivityAt?: Maybe<Scalars['DateTime']['output']>;
  lastActivityDetail?: Maybe<PostLastActivityDetail>;
  /** Whether the post is locked */
  locked: Scalars['Boolean']['output'];
  /** @deprecated This field is going to be deprecated in favor of "fields" */
  mappingFields?: Maybe<Array<PostMappingField>>;
  mentionedMembers: Array<Scalars['String']['output']>;
  mentions?: Maybe<Array<Member>>;
  /** @deprecated There are no negative reactions anymore. */
  negativeReactions?: Maybe<Array<Scalars['String']['output']>>;
  /** @deprecated There are no positive reactions anymore. */
  negativeReactionsCount?: Maybe<Scalars['Int']['output']>;
  networkId: Scalars['ID']['output'];
  owner?: Maybe<SpaceMember>;
  ownerId: Scalars['ID']['output'];
  pinnedInto: Array<PinnedInto>;
  pinnedReplies?: Maybe<Array<Post>>;
  /** @deprecated There are no positive reactions anymore. */
  positiveReactions?: Maybe<Array<Scalars['String']['output']>>;
  /** @deprecated There are no positive reactions anymore. */
  positiveReactionsCount?: Maybe<Scalars['Int']['output']>;
  postType?: Maybe<PostType>;
  postTypeId: Scalars['ID']['output'];
  /** Has been replaced by allowedReactions, but some may still use it */
  primaryReactionType?: Maybe<ReactionType>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  reactions?: Maybe<Array<PostReactionDetail>>;
  reactionsCount: Scalars['Int']['output'];
  relativeUrl?: Maybe<Scalars['String']['output']>;
  repliedTo?: Maybe<Post>;
  repliedToId?: Maybe<Scalars['ID']['output']>;
  repliedToIds?: Maybe<Array<Scalars['String']['output']>>;
  repliedTos?: Maybe<Array<Post>>;
  replies?: Maybe<PaginatedPost>;
  repliesCount: Scalars['Int']['output'];
  seoDetail: PostSeoDetail;
  shortContent?: Maybe<Scalars['String']['output']>;
  shortcuts?: Maybe<Array<Shortcut>>;
  singleChoiceReactions?: Maybe<Array<Scalars['String']['output']>>;
  slug?: Maybe<Scalars['String']['output']>;
  space?: Maybe<Space>;
  spaceId: Scalars['ID']['output'];
  status: PostStatus;
  subscribersCount?: Maybe<Scalars['Int']['output']>;
  tagIds?: Maybe<Array<Scalars['String']['output']>>;
  tags?: Maybe<Array<Tag>>;
  textContent?: Maybe<Scalars['String']['output']>;
  thumbnail?: Maybe<Media>;
  thumbnailId?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  topRepliers: Array<PostTopReplier>;
  /** @deprecated topicIds is replaced by tagIds. */
  topicIds?: Maybe<Array<Scalars['String']['output']>>;
  totalRepliesCount: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
  url?: Maybe<Scalars['String']['output']>;
};


export type PostContentSummaryArgs = {
  format?: ShortContentFormat;
  length?: Scalars['Int']['input'];
};


export type PostRepliesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  excludePins?: InputMaybe<Scalars['Boolean']['input']>;
  limit: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PostListOrderByEnum>;
  orderByString?: InputMaybe<Scalars['String']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
};


export type PostShortContentArgs = {
  format?: ShortContentFormat;
  length?: InputMaybe<Scalars['Int']['input']>;
};

export type PostAuthMemberProps = {
  __typename?: 'PostAuthMemberProps';
  availableReplyTypes?: Maybe<Array<PostType>>;
  canReact?: Maybe<Scalars['Boolean']['output']>;
  context: PermissionContext;
  /** @deprecated Use "subscribed" instead */
  memberPostNotificationSettingsEnabled?: Maybe<Scalars['Boolean']['output']>;
  permissions?: Maybe<Array<ActionPermissions>>;
  scopes?: Maybe<Array<Scalars['String']['output']>>;
  subscribed?: Maybe<Scalars['Boolean']['output']>;
};

export type PostContentSummary = {
  __typename?: 'PostContentSummary';
  hasMoreContent: Scalars['Boolean']['output'];
  summary: Scalars['String']['output'];
};

export type PostEdge = {
  __typename?: 'PostEdge';
  cursor: Scalars['String']['output'];
  node: Post;
};

export enum PostFieldsEnum {
  Boolean1 = 'boolean1',
  Boolean2 = 'boolean2',
  Boolean3 = 'boolean3',
  Boolean4 = 'boolean4',
  Boolean5 = 'boolean5',
  Date1 = 'date1',
  Date2 = 'date2',
  Date3 = 'date3',
  Date4 = 'date4',
  Date5 = 'date5',
  Html1 = 'html1',
  Html2 = 'html2',
  Html3 = 'html3',
  Html4 = 'html4',
  Html5 = 'html5',
  Html6 = 'html6',
  Html7 = 'html7',
  Html8 = 'html8',
  Html9 = 'html9',
  Html10 = 'html10',
  Image1 = 'image1',
  Image2 = 'image2',
  Image3 = 'image3',
  Image4 = 'image4',
  Image5 = 'image5',
  Number1 = 'number1',
  Number2 = 'number2',
  Number3 = 'number3',
  Number4 = 'number4',
  Number5 = 'number5',
  NumberArray1 = 'numberArray1',
  NumberArray2 = 'numberArray2',
  NumberArray3 = 'numberArray3',
  NumberArray4 = 'numberArray4',
  NumberArray5 = 'numberArray5',
  Text1 = 'text1',
  Text2 = 'text2',
  Text3 = 'text3',
  Text4 = 'text4',
  Text5 = 'text5',
  Text6 = 'text6',
  Text7 = 'text7',
  Text8 = 'text8',
  Text9 = 'text9',
  Text10 = 'text10',
  TextArray1 = 'textArray1',
  TextArray2 = 'textArray2',
  TextArray3 = 'textArray3',
  TextArray4 = 'textArray4',
  TextArray5 = 'textArray5'
}

export type PostLastActivityDetail = {
  __typename?: 'PostLastActivityDetail';
  entity?: Maybe<PostLastActivityEntity>;
  entityId: Scalars['ID']['output'];
  entityType: PostLastActivityEntityType;
};

export type PostLastActivityEntity = Post | PostReactionParticipant;

export enum PostLastActivityEntityType {
  Reaction = 'Reaction',
  Reply = 'Reply'
}

export enum PostListFilterByEnum {
  Boolean1 = 'boolean1',
  Boolean2 = 'boolean2',
  Boolean3 = 'boolean3',
  Boolean4 = 'boolean4',
  Boolean5 = 'boolean5',
  CreatedAt = 'createdAt',
  Date1 = 'date1',
  Date2 = 'date2',
  Date3 = 'date3',
  Date4 = 'date4',
  Date5 = 'date5',
  Number1 = 'number1',
  Number2 = 'number2',
  Number3 = 'number3',
  Number4 = 'number4',
  Number5 = 'number5',
  PublishedAt = 'publishedAt',
  UpdatedAt = 'updatedAt'
}

export type PostListFilterByInput = {
  key?: InputMaybe<PostListFilterByEnum>;
  keyString?: InputMaybe<Scalars['String']['input']>;
  operator?: InputMaybe<PostListFilterByOperator>;
  value: Scalars['String']['input'];
};

export enum PostListFilterByOperator {
  Contains = 'contains',
  EndsWith = 'endsWith',
  Equals = 'equals',
  Gt = 'gt',
  Gte = 'gte',
  HasValue = 'hasValue',
  In = 'in',
  Lt = 'lt',
  Lte = 'lte',
  Nin = 'nin',
  Not = 'not',
  StartsWith = 'startsWith'
}

export enum PostListOrderByEnum {
  Boolean1 = 'boolean1',
  Boolean2 = 'boolean2',
  Boolean3 = 'boolean3',
  Boolean4 = 'boolean4',
  Boolean5 = 'boolean5',
  CreatedAt = 'createdAt',
  Date1 = 'date1',
  Date2 = 'date2',
  Date3 = 'date3',
  Date4 = 'date4',
  Date5 = 'date5',
  LastActivityAt = 'lastActivityAt',
  Number1 = 'number1',
  Number2 = 'number2',
  Number3 = 'number3',
  Number4 = 'number4',
  Number5 = 'number5',
  PublishedAt = 'publishedAt',
  ReactionsCount = 'reactionsCount',
  RepliesCount = 'repliesCount',
  Text1 = 'text1',
  Text2 = 'text2',
  Text3 = 'text3',
  Text4 = 'text4',
  Text5 = 'text5',
  TotalRepliesCount = 'totalRepliesCount',
  UpdatedAt = 'updatedAt'
}

export type PostMappingField = {
  __typename?: 'PostMappingField';
  key: Scalars['String']['output'];
  type: PostMappingTypeEnum;
  value: Scalars['String']['output'];
};

export type PostMappingFieldInput = {
  key: Scalars['String']['input'];
  type: PostMappingTypeEnum;
  value: Scalars['String']['input'];
};

export enum PostMappingTypeEnum {
  Boolean = 'boolean',
  Date = 'date',
  Html = 'html',
  Image = 'image',
  Number = 'number',
  NumberArray = 'numberArray',
  Text = 'text',
  TextArray = 'textArray'
}

export type PostReactionDetail = {
  __typename?: 'PostReactionDetail';
  count: Scalars['Int']['output'];
  participants?: Maybe<PaginatedPostReactionParticipant>;
  reacted: Scalars['Boolean']['output'];
  reaction: Scalars['String']['output'];
};


export type PostReactionDetailParticipantsArgs = {
  limit: Scalars['Int']['input'];
};

export type PostReactionParticipant = {
  __typename?: 'PostReactionParticipant';
  participant?: Maybe<Member>;
  reaction?: Maybe<PostReactionDetail>;
};

export type PostReactionParticipantEdge = {
  __typename?: 'PostReactionParticipantEdge';
  cursor: Scalars['String']['output'];
  node: PostReactionParticipant;
};

export type PostSeoDetail = {
  __typename?: 'PostSeoDetail';
  description?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};

export enum PostStatus {
  Archived = 'ARCHIVED',
  Blocked = 'BLOCKED',
  Deleted = 'DELETED',
  Drafted = 'DRAFTED',
  Published = 'PUBLISHED'
}

export type PostTopReplier = {
  __typename?: 'PostTopReplier';
  member?: Maybe<Member>;
  repliesCount: Scalars['Int']['output'];
};

export type PostType = {
  __typename?: 'PostType';
  actions?: Maybe<Array<PostTypeAction>>;
  /** @deprecated Use allowedReactions instead. */
  allowedEmojis?: Maybe<Array<Scalars['String']['output']>>;
  allowedReactions?: Maybe<Array<Scalars['String']['output']>>;
  archived: Scalars['Boolean']['output'];
  authMemberProps?: Maybe<PostTypeAuthMemberProps>;
  context: PostTypeContext;
  createdAt: Scalars['DateTime']['output'];
  customReactions?: Maybe<Array<CustomReaction>>;
  description?: Maybe<Scalars['String']['output']>;
  excludedNativeShortcuts?: Maybe<Array<Scalars['String']['output']>>;
  /** @deprecated Use forbiddenReactions instead. */
  forbiddenEmojis?: Maybe<Array<Scalars['String']['output']>>;
  forbiddenReactions?: Maybe<Array<Scalars['String']['output']>>;
  icon?: Maybe<Media>;
  iconId?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  languageTemplate?: Maybe<Scalars['String']['output']>;
  layout: Scalars['String']['output'];
  /** @deprecated This field is going to be deprecated in favor of "postFields" */
  mappings?: Maybe<Array<PostTypeMapping>>;
  name: Scalars['String']['output'];
  nativeFieldsTemplates?: Maybe<NativeFieldsTemplates>;
  /** @deprecated There are no negative reactions anymore. */
  negativeReactions?: Maybe<Array<Scalars['String']['output']>>;
  pluralName: Scalars['String']['output'];
  /** @deprecated There are no positive reactions anymore. */
  positiveReactions?: Maybe<Array<Scalars['String']['output']>>;
  postFields?: Maybe<CustomFieldsSchema>;
  /** Has been replaced by allowedReactions, but some may still use it */
  primaryReactionType?: Maybe<ReactionType>;
  recommendationsSettings?: Maybe<PostTypeRecommendationSettings>;
  shortContentTemplate?: Maybe<Scalars['String']['output']>;
  singleChoiceReactions?: Maybe<Array<Scalars['String']['output']>>;
  slate: Slate;
  slug: Scalars['String']['output'];
  titleTemplate?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  validReplyTypes?: Maybe<Array<PostType>>;
};

export type PostTypeAction = {
  __typename?: 'PostTypeAction';
  props?: Maybe<Scalars['String']['output']>;
  shortcutKey: Scalars['String']['output'];
};

export type PostTypeAuthMemberProps = {
  __typename?: 'PostTypeAuthMemberProps';
  availableSpaces?: Maybe<Array<Space>>;
  context: PermissionContext;
  permissions?: Maybe<Array<ActionPermissions>>;
  scopes?: Maybe<Array<Scalars['String']['output']>>;
};

export enum PostTypeContext {
  Post = 'post',
  Reply = 'reply'
}

export type PostTypeEdge = {
  __typename?: 'PostTypeEdge';
  cursor: Scalars['String']['output'];
  node: PostType;
};

export type PostTypeMapping = {
  __typename?: 'PostTypeMapping';
  default?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  field: PostFieldsEnum;
  isMainContent?: Maybe<Scalars['Boolean']['output']>;
  isSearchable?: Maybe<Scalars['Boolean']['output']>;
  key: Scalars['String']['output'];
  required?: Maybe<Scalars['Boolean']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  type: PostMappingTypeEnum;
};

export type PostTypeRecommendationSettings = {
  __typename?: 'PostTypeRecommendationSettings';
  fields: Array<Scalars['String']['output']>;
  sourceSelf?: Maybe<Scalars['Boolean']['output']>;
  sourceSpaces?: Maybe<Array<Scalars['String']['output']>>;
};

export type PostTypeRecommendationSettingsInput = {
  fields: Array<Scalars['String']['input']>;
  sourceSelf?: InputMaybe<Scalars['Boolean']['input']>;
  sourceSpaces?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type Price = {
  __typename?: 'Price';
  currency: Scalars['String']['output'];
  formattedValue: Scalars['String']['output'];
  value: Scalars['Float']['output'];
};

export enum PrimaryScopes {
  CreateContent = 'CreateContent',
  DeleteAuthMember = 'DeleteAuthMember',
  DeleteContent = 'DeleteContent',
  DeleteMember = 'DeleteMember',
  DeleteNetwork = 'DeleteNetwork',
  FindAuthMember = 'FindAuthMember',
  FindContent = 'FindContent',
  FindNetwork = 'FindNetwork',
  FullAccess = 'FullAccess',
  InviteMember = 'InviteMember',
  JoinNetwork = 'JoinNetwork',
  UpdateAuthMember = 'UpdateAuthMember',
  UpdateBilling = 'UpdateBilling',
  UpdateContent = 'UpdateContent',
  UpdateMember = 'UpdateMember',
  UpdateModeration = 'UpdateModeration',
  UpdateNetwork = 'UpdateNetwork',
  UpdateNetworkTemplate = 'UpdateNetworkTemplate',
  UpdateReport = 'UpdateReport',
  ViewAuthMember = 'ViewAuthMember',
  ViewContent = 'ViewContent',
  ViewMember = 'ViewMember',
  ViewNetwork = 'ViewNetwork',
  ViewReport = 'ViewReport'
}

/** Input for creating a private message. */
export type PrivateMessageInput = {
  memberIds?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type PrivateMessagingSettings = {
  __typename?: 'PrivateMessagingSettings';
  membersCanTurnOffPrivateMessaging: Scalars['Boolean']['output'];
  membersCanUsePrivateMessaging: Scalars['Boolean']['output'];
  privateMessagingEnabled: Scalars['Boolean']['output'];
};

export type PrivateMessagingSettingsInput = {
  membersCanTurnOffPrivateMessaging: Scalars['Boolean']['input'];
  membersCanUsePrivateMessaging: Scalars['Boolean']['input'];
  privateMessagingEnabled: Scalars['Boolean']['input'];
};

export type Product = {
  __typename?: 'Product';
  description: Scalars['String']['output'];
  features: Array<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  prices?: Maybe<Array<ProductPrice>>;
  seatCapacity: Scalars['Int']['output'];
};

export type ProductPrice = {
  __typename?: 'ProductPrice';
  additionalSeatPrice: Price;
  planPrice: Price;
  renewalType: PlanRenewalType;
};

export type Publisher = {
  __typename?: 'Publisher';
  id: Scalars['ID']['output'];
  member?: Maybe<Member>;
  networkId: Scalars['ID']['output'];
  notifyImplicitSubscriptions?: Maybe<Scalars['Boolean']['output']>;
  post?: Maybe<Post>;
  space?: Maybe<Space>;
  type: PublisherType;
};

export type PublisherEdge = {
  __typename?: 'PublisherEdge';
  cursor: Scalars['String']['output'];
  node: Publisher;
};

export enum PublisherType {
  Custom = 'Custom',
  Member = 'Member',
  Post = 'Post',
  Space = 'Space'
}

export type PurchaseInput = {
  billingDetails?: InputMaybe<BillingDetailsInput>;
  planName: PlanName;
  promotionCode?: InputMaybe<Scalars['String']['input']>;
  renewalType: PlanRenewalType;
  seats: Scalars['Int']['input'];
};

export type PurgeMediasInput = {
  mediaIds: Array<Scalars['String']['input']>;
};

export type Query = {
  __typename?: 'Query';
  accessGroup: AccessGroup;
  accessGroups: Array<AccessGroup>;
  activityLogs: Array<ReportRecord>;
  analytics: Array<AnalyticsResponse>;
  apiRateLimitStats: Array<ApiRateLimitStat>;
  apiUsages: Array<DailyApiUsage>;
  app: App;
  apps: PaginatedApp;
  authMember: Member;
  authMemberAppInstallation: AppInstallation;
  authMemberAppInstallations: PaginatedAppInstallation;
  availableDynamicBlocks: Array<DynamicBlock>;
  /** @deprecated Use new billing APIs */
  baskets: Array<Basket>;
  /** @deprecated Use new billing APIs */
  billingDetails?: Maybe<BillingDetails>;
  billingProducts: BillingProducts;
  /** @deprecated Use new billing APIs */
  cancelSubscription?: Maybe<Action>;
  /** @deprecated This query will be replaced by domainAvailability */
  checkDomainAvailability: DomainAvailability;
  /** @deprecated This query will be replaced by emailAvailability */
  checkEmailAvailability: EmailAvailability;
  /** @deprecated This query will be replaced by invitationLinkValidity */
  checkInvitationLinkValidity: MemberInvitationLink;
  /** @deprecated This query will be replaced by memberInvitationValidity */
  checkMemberInvitationValidity: MemberInvitation;
  /** @deprecated This query will be replaced by newDomainStatus */
  checkNewDomainStatus: DomainTransferStatus;
  /** @deprecated This query will be replaced by passwordComplexity */
  checkPasswordComplexity: PasswordComplexity;
  /** @deprecated This query will be replaced by usernameAvailability */
  checkUsernameAvailability: UsernameAvailability;
  collection: Collection;
  collections: Array<Collection>;
  domainAvailability: DomainAvailability;
  dynamicBlock: DynamicBlock;
  dynamicBlockByKey: DynamicBlock;
  dynamicBlocks: PaginatedDynamicBlock;
  emailAvailability: EmailAvailability;
  emailLogs: PaginatedEmailLog;
  embed: Embed;
  exploreSpaces: PaginatedSpace;
  exportMemberRequest: Export;
  exportMemberRequests: PaginatedExport;
  extraProperties: Array<ExtraProperty>;
  feed: PaginatedPost;
  /** @deprecated This query will be replaced by app */
  getAppById: App;
  /** @deprecated This query will be replaced by app */
  getAppBySlug: App;
  getAppNetworkSettings: Scalars['String']['output'];
  getAppSpaceSettings: Scalars['String']['output'];
  /** @deprecated This query will be replaced by apps */
  getApps: PaginatedApp;
  /** @deprecated This query will be replaced by authMember */
  getAuthMember: Member;
  /** @deprecated This query will be replaced by embed */
  getEmbed: Embed;
  /** @deprecated This query will be replaced by feed */
  getFeed: PaginatedPost;
  /** @deprecated This query will be replaced by collection */
  getGroup: Collection;
  /** @deprecated This query will be replaced by collections */
  getGroups: Array<Collection>;
  /** @deprecated This query will be replaced by media */
  getMedia: Media;
  /** @deprecated This query will be replaced by member */
  getMember: Member;
  /** @deprecated Use authMemberAppInstallations instead */
  getMemberAppInstallations: PaginatedAppInstallation;
  /** @deprecated This query will be replaced by memberInvitation */
  getMemberInvitation: MemberInvitation;
  /** @deprecated This query will be replaced by memberInvitationLink */
  getMemberInvitationLink: MemberInvitationLink;
  /** @deprecated This query will be replaced by memberInvitations */
  getMemberInvitations: PaginatedMemberInvitation;
  /** @deprecated This query will be replaced by memberPosts */
  getMemberPosts: PaginatedPost;
  /** @deprecated This query will be replaced by memberSpaces */
  getMemberSpaces: PaginatedSpaceMember;
  /** @deprecated This query will be replaced by members */
  getMembers: PaginatedMember;
  /** @deprecated This query will be replaced by moderationItem */
  getModerationById: ModerationItem;
  /** @deprecated This query will be replaced by moderationItemReporters */
  getModerationReporters: PaginatedModerationItemReporter;
  /** @deprecated This query will be replaced by moderationSettings */
  getModerationSetting: ModerationSettings;
  /** @deprecated This query will be replaced by moderationItems */
  getModerations: PaginatedModeration;
  /** @deprecated This query will be replaced by network */
  getNetwork: Network;
  /** @deprecated Use networkAppInstallations instead */
  getNetworkAppInstallations: PaginatedAppInstallation;
  /** @deprecated This query will be replaced by networkApps */
  getNetworkApps: Array<App>;
  /** @deprecated This query will be replaced by networkPublicInfo */
  getNetworkPublicInfo: NetworkPublicInfo;
  /** @deprecated This query will be replaced by networks */
  getNetworks: PaginatedNetwork;
  /** @deprecated This query will be replaced by notifications */
  getNotifications: PaginatedNotification;
  /** @deprecated This query will be replaced by notificationsCount */
  getNotificationsCount: NotificationsCount;
  /** @deprecated This query will be replaced by post */
  getPost: Post;
  /** @deprecated We no longer support app installation on space */
  getPostAppInstallations: PaginatedAppInstallation;
  /** @deprecated This query will be replaced by postReactionParticipants */
  getPostReactionParticipants: PaginatedPostReactionParticipant;
  /** @deprecated This query will be replaced by posts */
  getPosts: PaginatedPost;
  /** @deprecated This query will be replaced by replies */
  getReplies: PaginatedPost;
  /** @deprecated This query is replaced by analytics */
  getReport: Report;
  /** @deprecated This query will be replaced by roles */
  getRoles: Array<Role>;
  /** @deprecated This query will be replaced by scopes */
  getScopes: Scopes;
  /** @deprecated This query will be replaced by space */
  getSpace: Space;
  /** @deprecated We no longer support app installation on space */
  getSpaceAppInstallations: PaginatedAppInstallation;
  /** @deprecated This query will be replaced by spaceMembers */
  getSpaceMembers: PaginatedSpaceMember;
  /** @deprecated This query will be replaced by memberSpaceMembershipRequest */
  getSpaceMembershipRequestForMember: Array<SpaceJoinRequest>;
  /** @deprecated This query will be replaced by spaceMembershipRequests */
  getSpaceMembershipRequests: Array<SpaceJoinRequest>;
  /** @deprecated This query will be replaced by spacePinnedPosts */
  getSpacePinnedPosts: Array<Post>;
  /** @deprecated This query is replaced by analytics */
  getSpaceReport: Report;
  /** @deprecated This query will be replaced by spaceRoles */
  getSpaceRoles: Array<SpaceRole>;
  /** @deprecated This query will be replaced by ssoMemberships */
  getSsoMemberships: Array<SsoMembership>;
  /** @deprecated This query will be replaced by supportNetworkTokens */
  getSupportNetworkTokens: SupportLimitedAuthToken;
  /** @deprecated This query will be replaced by tokens */
  getTokens: AuthToken;
  /** @deprecated Use the global gateway instead */
  globalApp: App;
  /** @deprecated Use the global gateway instead */
  globalAppCollaborators: Array<AppCollaborator>;
  /** @deprecated Use the global gateway instead */
  globalAppPublications: Array<AppPublication>;
  /** @deprecated Use the global gateway instead */
  globalAppSettings: AppSetting;
  /** @deprecated Use the global gateway instead */
  globalApps: PaginatedApp;
  /** @deprecated Use the global gateway instead */
  globalEmbed: Embed;
  /** @deprecated Use the global gateway instead */
  globalEventTypes: Array<EventType>;
  /** @deprecated Use the global gateway instead */
  globalMedia: Media;
  /** @deprecated Use the global gateway instead */
  globalNetworks: PaginatedNetwork;
  /** @deprecated Use the global gateway instead */
  globalToken: GlobalToken;
  homepage?: Maybe<Page>;
  /** @deprecated This query will be replaced by impersonateLoginToNetwork mutation */
  impersonateLoginToNetwork: AuthInfoWithOtp;
  invitationLinkValidity: MemberInvitationLink;
  /** @deprecated Use new billing APIs */
  invoices: Array<Invoice>;
  /** @deprecated This query is replaced by analytics */
  leaderboard: Array<Member>;
  /** @deprecated This query is replaced by analytics */
  leaderboardWithScores: Array<LeaderboardItem>;
  limitedToken: AppToken;
  /** @deprecated This query will be replaced by loginNetwork mutation */
  loginNetwork: AuthToken;
  /** @deprecated This query will be replaced by loginNetworkWithPassword mutation */
  loginNetworkWithPassword: AuthToken;
  /** @deprecated This query will be replaced by supportSsoUrl */
  loginSupportWithSso: SupportSsoUrl;
  loginSupportWithSsoCode: SupportAuthToken;
  /** @deprecated This query will be replaced by ssoUrl */
  loginWithSso: SsoUrl;
  /** @deprecated This query will be replaced by loginWithSsoCode mutation */
  loginWithSsoCode: AuthToken;
  massActionRequest: MassActionRequest;
  massActionRequestInProgress: MassActionRequest;
  media: Media;
  member: Member;
  memberInvitation: MemberInvitation;
  memberInvitationLink: MemberInvitationLink;
  memberInvitationValidity: MemberInvitation;
  memberInvitations: PaginatedMemberInvitation;
  memberPosts: PaginatedPost;
  /** @deprecated This query is no longer valid. */
  memberScore: Report;
  memberSpaceMembershipRequest: Array<SpaceJoinRequest>;
  memberSpaces: PaginatedSpaceMember;
  members: PaginatedMember;
  membersByIds: Array<Member>;
  migrationSampleFile: Scalars['String']['output'];
  moderationItem: ModerationItem;
  moderationItemReporters: PaginatedModerationItemReporter;
  moderationItems: PaginatedModeration;
  moderationSettings: ModerationSettings;
  network: Network;
  networkAppInstallations: PaginatedAppInstallation;
  networkApps: Array<App>;
  networkPublicInfo: NetworkPublicInfo;
  networks: PaginatedNetwork;
  networksMembers: PaginatedPluralMember;
  newDomainStatus: DomainTransferStatus;
  notifications: PaginatedNotification;
  notificationsCount: NotificationsCount;
  oAuthCode: OAuthCode;
  oAuthTokens: OAuthTokens;
  otp: Scalars['String']['output'];
  page: Page;
  pageCustomResponses: PaginatedPageCustomResponse;
  passwordComplexity: PasswordComplexity;
  permission: Permission;
  permissions: Array<Permission>;
  post: Post;
  postModerationItems: PaginatedModeration;
  postReactionParticipants: PaginatedPostReactionParticipant;
  postType: PostType;
  postTypes: PaginatedPostType;
  posts: PaginatedPost;
  postsByIds: Array<Post>;
  /** Create or get a private message space inside your community which will be visible to recipient only after first message. */
  privateMessage: Space;
  probeDomain: DomainProbeResult;
  /** @deprecated Use new billing APIs */
  products: Array<Product>;
  /** Get the publisher settings for the given publisher. */
  publisherSettings: Publisher;
  recommendMembers: Array<Member>;
  recommendPosts: Array<Post>;
  recommendSpaces: Array<Space>;
  redirect: Redirect;
  replies: PaginatedPost;
  /** @deprecated This query is replaced by analytics */
  report: Report;
  roles: Array<Role>;
  scopes: Scopes;
  search: SearchResult;
  searchMembers: PaginatedMember;
  searchMembersForSpaceInvitation: Array<MemberForSpaceInvitation>;
  searchPosts: PaginatedPost;
  searchSpaces: PaginatedSpace;
  /** Paginates over the sitemap items of the site, the items can correspond to SEO indexed posts or SEO indexed spaces */
  sitemap: PaginatedSitemap;
  space: Space;
  spaceJoinRequests: PaginatedSpaceJoinRequest;
  spaceMember: SpaceMember;
  spaceMembers: PaginatedSpaceMember;
  spaceMembershipRequests: Array<SpaceJoinRequest>;
  spacePinnedPosts: Array<Post>;
  spacePostType: SpacePostType;
  spacePostTypes: PaginatedSpacePostType;
  spaceRoles: Array<SpaceRole>;
  spaces: PaginatedSpace;
  spacesByIds: Array<Space>;
  spacesBySlugs: Array<Space>;
  ssoMemberships: Array<SsoMembership>;
  ssoUrl: SsoUrl;
  ssos: Array<Sso>;
  /** Get the subscriber settings for the auth member. */
  subscriberSettings: Subscriber;
  /** @deprecated Use new billing APIs */
  subscription?: Maybe<BillingSubscription>;
  subscriptionInformation: SubscriptionInformation;
  /** Get the subscriptions for the auth member. */
  subscriptions: PaginatedNotificationSubscriptions;
  supportNetworkTokens: SupportLimitedAuthToken;
  supportSsoUrl: SupportSsoUrl;
  systemSpaces: Array<Space>;
  tagPosts: PaginatedPost;
  tags: PaginatedTag;
  template: Template;
  templateRequest: TemplateRequest;
  templates: PaginatedTemplate;
  tokens: AuthToken;
  translateMarkup: Array<Scalars['String']['output']>;
  usernameAvailability: UsernameAvailability;
  /** @deprecated Use new billing APIs */
  vatTypes: Array<VatTypeInfo>;
};


export type QueryAccessGroupArgs = {
  id: Scalars['ID']['input'];
};


export type QueryActivityLogsArgs = {
  query: Scalars['String']['input'];
};


export type QueryAnalyticsArgs = {
  queries: Array<Scalars['String']['input']>;
};


export type QueryAppArgs = {
  clientId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  redirectUri?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAppsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
  standing?: InputMaybe<StoreItemStanding>;
  status?: InputMaybe<StoreItemStatus>;
};


export type QueryAuthMemberAppInstallationArgs = {
  appId: Scalars['String']['input'];
};


export type QueryAuthMemberAppInstallationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<AppInstallationStatus>;
};


export type QueryAvailableDynamicBlocksArgs = {
  context?: InputMaybe<PermissionContext>;
  size?: InputMaybe<DynamicBlockSize>;
};


export type QueryBasketsArgs = {
  input: BasketsInput;
};


export type QueryCheckDomainAvailabilityArgs = {
  input: DomainAvailabilityInput;
};


export type QueryCheckEmailAvailabilityArgs = {
  email: Scalars['String']['input'];
};


export type QueryCheckInvitationLinkValidityArgs = {
  invitationLinkId: Scalars['String']['input'];
};


export type QueryCheckMemberInvitationValidityArgs = {
  token: Scalars['String']['input'];
};


export type QueryCheckNewDomainStatusArgs = {
  domain: Scalars['String']['input'];
};


export type QueryCheckPasswordComplexityArgs = {
  password: Scalars['String']['input'];
};


export type QueryCheckUsernameAvailabilityArgs = {
  username: Scalars['String']['input'];
};


export type QueryCollectionArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryCollectionsArgs = {
  orderBy?: InputMaybe<CollectionListOrderByEnum>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryDomainAvailabilityArgs = {
  input: DomainAvailabilityInput;
};


export type QueryDynamicBlockArgs = {
  blockId: Scalars['ID']['input'];
};


export type QueryDynamicBlockByKeyArgs = {
  appId: Scalars['ID']['input'];
  key: Scalars['String']['input'];
};


export type QueryDynamicBlocksArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  appIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  before?: InputMaybe<Scalars['String']['input']>;
  contexts?: InputMaybe<Array<PermissionContext>>;
  limit: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryEmailAvailabilityArgs = {
  email: Scalars['String']['input'];
};


export type QueryEmailLogsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  limit: Scalars['Int']['input'];
  recipient?: InputMaybe<Scalars['String']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
  statuses?: InputMaybe<Array<EmailStatus>>;
  types?: InputMaybe<Array<EmailType>>;
};


export type QueryEmbedArgs = {
  input: EmbedInput;
};


export type QueryExploreSpacesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  collectionId?: InputMaybe<Scalars['String']['input']>;
  limit: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryExportMemberRequestArgs = {
  id: Scalars['ID']['input'];
};


export type QueryExportMemberRequestsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ExportListOrderByEnum>;
  query?: InputMaybe<Scalars['String']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
  statuses?: InputMaybe<Array<ExportStatus>>;
};


export type QueryExtraPropertiesArgs = {
  entityId?: InputMaybe<Scalars['String']['input']>;
  entityType: ExtraPropertyEntityType;
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type QueryFeedArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filterBy?: InputMaybe<Array<PostListFilterByInput>>;
  limit: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
  onlyMemberSpaces?: InputMaybe<Scalars['Boolean']['input']>;
  orderBy?: InputMaybe<PostListOrderByEnum>;
  orderByString?: InputMaybe<Scalars['String']['input']>;
  postTypeIds?: InputMaybe<Array<Scalars['String']['input']>>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryGetAppByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetAppBySlugArgs = {
  slug: Scalars['String']['input'];
};


export type QueryGetAppNetworkSettingsArgs = {
  appId: Scalars['ID']['input'];
};


export type QueryGetAppSpaceSettingsArgs = {
  appId: Scalars['ID']['input'];
  spaceId: Scalars['ID']['input'];
};


export type QueryGetAppsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<StoreItemStatus>;
};


export type QueryGetEmbedArgs = {
  input: EmbedInput;
};


export type QueryGetFeedArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filterBy?: InputMaybe<Array<PostListFilterByInput>>;
  limit: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
  onlyMemberSpaces?: InputMaybe<Scalars['Boolean']['input']>;
  orderBy?: InputMaybe<PostListOrderByEnum>;
  postTypeIds?: InputMaybe<Array<Scalars['String']['input']>>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryGetGroupArgs = {
  groupId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryGetMediaArgs = {
  mediaId: Scalars['ID']['input'];
};


export type QueryGetMemberArgs = {
  memberId?: InputMaybe<Scalars['ID']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetMemberAppInstallationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<AppInstallationStatus>;
};


export type QueryGetMemberInvitationArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetMemberInvitationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
  roleIds?: InputMaybe<Array<Scalars['String']['input']>>;
  status?: InputMaybe<MemberInvitationStatus>;
};


export type QueryGetMemberPostsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit: Scalars['Int']['input'];
  memberId: Scalars['ID']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryGetMemberSpacesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  groupId?: InputMaybe<Scalars['String']['input']>;
  limit: Scalars['Int']['input'];
  memberId: Scalars['ID']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
  roleIds?: InputMaybe<Array<Scalars['ID']['input']>>;
};


export type QueryGetMembersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
  roleIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  status?: InputMaybe<Array<MemberStatusInput>>;
};


export type QueryGetModerationByIdArgs = {
  moderationId: Scalars['ID']['input'];
};


export type QueryGetModerationReportersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit: Scalars['Int']['input'];
  moderationId: Scalars['String']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryGetModerationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  entityId?: InputMaybe<Scalars['String']['input']>;
  entityType?: InputMaybe<ModerationEntityType>;
  flaggedBy?: InputMaybe<FlaggedType>;
  limit: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
  spaceId?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<ModerationStatus>;
};


export type QueryGetNetworkAppInstallationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<AppInstallationStatus>;
};


export type QueryGetNetworkAppsArgs = {
  status?: InputMaybe<AppInstallationStatus>;
};


export type QueryGetNetworksArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryGetNotificationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  limit: Scalars['Int']['input'];
  verb?: InputMaybe<NotificationVerb>;
};


export type QueryGetPostArgs = {
  postId: Scalars['ID']['input'];
};


export type QueryGetPostAppInstallationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
  postId: Scalars['ID']['input'];
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<AppInstallationStatus>;
};


export type QueryGetPostReactionParticipantsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
  postId: Scalars['ID']['input'];
  reaction: Scalars['ID']['input'];
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryGetPostsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  excludePins?: InputMaybe<Scalars['Boolean']['input']>;
  filterBy?: InputMaybe<Array<PostListFilterByInput>>;
  limit: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PostListOrderByEnum>;
  postTypeIds?: InputMaybe<Array<Scalars['String']['input']>>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
  spaceIds?: InputMaybe<Array<Scalars['ID']['input']>>;
};


export type QueryGetRepliesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  excludePins?: InputMaybe<Scalars['Boolean']['input']>;
  limit: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PostListOrderByEnum>;
  postId: Scalars['ID']['input'];
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryGetReportArgs = {
  input: ReportInput;
};


export type QueryGetScopesArgs = {
  contexts?: InputMaybe<Array<PermissionsContextInput>>;
};


export type QueryGetSpaceArgs = {
  spaceId?: InputMaybe<Scalars['ID']['input']>;
  spaceSlug?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryGetSpaceAppInstallationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
  spaceId: Scalars['ID']['input'];
  status?: InputMaybe<AppInstallationStatus>;
};


export type QueryGetSpaceMembersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
  roleIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  spaceId: Scalars['ID']['input'];
};


export type QueryGetSpaceMembershipRequestForMemberArgs = {
  status?: InputMaybe<SpaceJoinRequestStatus>;
};


export type QueryGetSpaceMembershipRequestsArgs = {
  spaceId: Scalars['ID']['input'];
  status?: InputMaybe<SpaceJoinRequestStatus>;
};


export type QueryGetSpacePinnedPostsArgs = {
  spaceId: Scalars['ID']['input'];
};


export type QueryGetSpaceReportArgs = {
  input: ReportInput;
  spaceId: Scalars['String']['input'];
};


export type QueryGetSpaceRolesArgs = {
  spaceId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryGetSsoMembershipsArgs = {
  memberId: Scalars['String']['input'];
};


export type QueryGetSupportNetworkTokensArgs = {
  input: CreateLimitedSupportTokenInput;
};


export type QueryGetTokensArgs = {
  networkDomain?: InputMaybe<Scalars['String']['input']>;
  networkId?: InputMaybe<Scalars['ID']['input']>;
  otp?: InputMaybe<Scalars['String']['input']>;
  refreshToken?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGlobalAppArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGlobalAppCollaboratorsArgs = {
  appId: Scalars['String']['input'];
};


export type QueryGlobalAppPublicationsArgs = {
  appId: Scalars['ID']['input'];
};


export type QueryGlobalAppSettingsArgs = {
  context: PermissionContext;
  entityId?: InputMaybe<Scalars['ID']['input']>;
  networkId: Scalars['ID']['input'];
};


export type QueryGlobalAppsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
  standing?: InputMaybe<StoreItemStanding>;
  status?: InputMaybe<StoreItemStatus>;
};


export type QueryGlobalEmbedArgs = {
  input: EmbedInput;
};


export type QueryGlobalMediaArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGlobalNetworksArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
  roleType?: InputMaybe<RoleType>;
};


export type QueryGlobalTokenArgs = {
  input: GlobalTokenInput;
};


export type QueryHomepageArgs = {
  type?: InputMaybe<HomeSpaceType>;
};


export type QueryImpersonateLoginToNetworkArgs = {
  input: ImpersonateLoginToNetworkInput;
};


export type QueryInvitationLinkValidityArgs = {
  id: Scalars['String']['input'];
};


export type QueryLeaderboardArgs = {
  input: ReportInput;
};


export type QueryLeaderboardWithScoresArgs = {
  includeAuthMember: Scalars['Boolean']['input'];
  input: ReportInput;
};


export type QueryLimitedTokenArgs = {
  context?: InputMaybe<PermissionContext>;
  entityId?: InputMaybe<Scalars['String']['input']>;
  impersonateMemberId?: InputMaybe<Scalars['String']['input']>;
  networkId: Scalars['String']['input'];
};


export type QueryLoginNetworkArgs = {
  input: LoginNetworkWithPasswordInput;
};


export type QueryLoginNetworkWithPasswordArgs = {
  input: LoginNetworkWithPasswordInput;
};


export type QueryLoginSupportWithSsoArgs = {
  input?: InputMaybe<SupportSsoUrlInput>;
};


export type QueryLoginSupportWithSsoCodeArgs = {
  input: LoginSupportWithSsoCodeInput;
};


export type QueryLoginWithSsoArgs = {
  input: SsoUrlInput;
};


export type QueryLoginWithSsoCodeArgs = {
  input: LoginWithSsoCodeInput;
};


export type QueryMassActionRequestArgs = {
  id: Scalars['String']['input'];
};


export type QueryMediaArgs = {
  id: Scalars['ID']['input'];
};


export type QueryMemberArgs = {
  externalId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};


export type QueryMemberInvitationArgs = {
  id: Scalars['ID']['input'];
};


export type QueryMemberInvitationValidityArgs = {
  token: Scalars['String']['input'];
};


export type QueryMemberInvitationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filterBy?: InputMaybe<Array<MemberInvitationFilterByInput>>;
  limit: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
  roleIds?: InputMaybe<Array<Scalars['String']['input']>>;
  status?: InputMaybe<MemberInvitationStatus>;
};


export type QueryMemberPostsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  hasParent?: InputMaybe<Scalars['Boolean']['input']>;
  limit: Scalars['Int']['input'];
  memberId: Scalars['ID']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryMemberScoreArgs = {
  input: ReportInput;
  spaceId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryMemberSpaceMembershipRequestArgs = {
  status?: InputMaybe<SpaceJoinRequestStatus>;
};


export type QueryMemberSpacesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  collectionId?: InputMaybe<Scalars['String']['input']>;
  limit: Scalars['Int']['input'];
  memberId: Scalars['ID']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
  roleIds?: InputMaybe<Array<Scalars['ID']['input']>>;
};


export type QueryMembersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filterBy?: InputMaybe<Array<MemberListFilterByInput>>;
  limit: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
  roleIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  status?: InputMaybe<Array<MemberStatusInput>>;
};


export type QueryMembersByIdsArgs = {
  ids: Array<Scalars['String']['input']>;
};


export type QueryMigrationSampleFileArgs = {
  type?: InputMaybe<PermissionContext>;
};


export type QueryModerationItemArgs = {
  id: Scalars['ID']['input'];
};


export type QueryModerationItemReportersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit: Scalars['Int']['input'];
  moderationId: Scalars['String']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryModerationItemsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  entityId?: InputMaybe<Scalars['String']['input']>;
  entityType?: InputMaybe<ModerationEntityType>;
  flaggedBy?: InputMaybe<FlaggedType>;
  limit: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
  reportCategories?: InputMaybe<Array<ReportCategory>>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
  spaceId?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<ModerationStatus>;
};


export type QueryNetworkAppInstallationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<AppInstallationStatus>;
};


export type QueryNetworkAppsArgs = {
  status?: InputMaybe<AppInstallationStatus>;
};


export type QueryNetworksArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryNetworksMembersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
  roleType?: InputMaybe<RoleType>;
  status?: InputMaybe<Array<MemberStatus>>;
};


export type QueryNewDomainStatusArgs = {
  domain: Scalars['String']['input'];
};


export type QueryNotificationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  limit: Scalars['Int']['input'];
  verb?: InputMaybe<NotificationVerb>;
};


export type QueryOAuthCodeArgs = {
  input: OAuthCodeInput;
};


export type QueryOAuthTokensArgs = {
  input: OAuthTokenInput;
};


export type QueryPageArgs = {
  path: Scalars['String']['input'];
};


export type QueryPageCustomResponsesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  creatorType?: InputMaybe<CreatorType>;
  limit: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPasswordComplexityArgs = {
  password: Scalars['String']['input'];
};


export type QueryPermissionArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPostArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPostModerationItemsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  entityId?: InputMaybe<Scalars['String']['input']>;
  flaggedBy?: InputMaybe<FlaggedType>;
  limit: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
  reportCategories?: InputMaybe<Array<ReportCategory>>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
  spaceId?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<ModerationStatus>;
};


export type QueryPostReactionParticipantsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
  postId: Scalars['ID']['input'];
  reaction: Scalars['ID']['input'];
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPostTypeArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPostTypesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  context?: InputMaybe<PostTypeContext>;
  limit: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPostsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  excludePins?: InputMaybe<Scalars['Boolean']['input']>;
  filterBy?: InputMaybe<Array<PostListFilterByInput>>;
  limit: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PostListOrderByEnum>;
  orderByString?: InputMaybe<Scalars['String']['input']>;
  postTypeIds?: InputMaybe<Array<Scalars['String']['input']>>;
  query?: InputMaybe<Scalars['String']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
  spaceIds?: InputMaybe<Array<Scalars['ID']['input']>>;
};


export type QueryPostsByIdsArgs = {
  ids: Array<Scalars['ID']['input']>;
  statuses?: InputMaybe<Array<Scalars['ID']['input']>>;
};


export type QueryPrivateMessageArgs = {
  input: PrivateMessageInput;
};


export type QueryProbeDomainArgs = {
  domain: Scalars['String']['input'];
};


export type QueryPublisherSettingsArgs = {
  publisherId: Scalars['String']['input'];
};


export type QueryRecommendMembersArgs = {
  filters?: InputMaybe<FiltersInput>;
  limit: Scalars['Float']['input'];
  negativeResourceIds?: InputMaybe<Array<Scalars['String']['input']>>;
  positiveResourceIds: Array<Scalars['String']['input']>;
};


export type QueryRecommendPostsArgs = {
  filters?: InputMaybe<FiltersInput>;
  limit: Scalars['Float']['input'];
  negativeResourceIds?: InputMaybe<Array<Scalars['String']['input']>>;
  positiveResourceIds: Array<Scalars['String']['input']>;
};


export type QueryRecommendSpacesArgs = {
  filters?: InputMaybe<FiltersInput>;
  limit: Scalars['Float']['input'];
  negativeResourceIds?: InputMaybe<Array<Scalars['String']['input']>>;
  positiveResourceIds: Array<Scalars['String']['input']>;
};


export type QueryRedirectArgs = {
  url: Scalars['String']['input'];
};


export type QueryRepliesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  excludePins?: InputMaybe<Scalars['Boolean']['input']>;
  limit: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PostListOrderByEnum>;
  postId: Scalars['ID']['input'];
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryReportArgs = {
  input: ReportInput;
  spaceId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryRolesArgs = {
  orderBy?: InputMaybe<RoleListOrderByEnum>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryScopesArgs = {
  contexts?: InputMaybe<Array<PermissionsContextInput>>;
};


export type QuerySearchArgs = {
  input: SearchInput;
};


export type QuerySearchMembersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  filters?: InputMaybe<FiltersInput>;
  limit: Scalars['Float']['input'];
  query: Scalars['String']['input'];
};


export type QuerySearchMembersForSpaceInvitationArgs = {
  input: SearchMembersForSpaceInvitationInput;
};


export type QuerySearchPostsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  filters?: InputMaybe<FiltersInput>;
  limit: Scalars['Float']['input'];
  query: Scalars['String']['input'];
};


export type QuerySearchSpacesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  filters?: InputMaybe<FiltersInput>;
  limit: Scalars['Float']['input'];
  query: Scalars['String']['input'];
};


export type QuerySitemapArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
  spacePath?: InputMaybe<Scalars['ID']['input']>;
};


export type QuerySpaceArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['ID']['input']>;
};


export type QuerySpaceJoinRequestsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit: Scalars['Int']['input'];
  memberId?: InputMaybe<Scalars['ID']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
  spaceId?: InputMaybe<Scalars['ID']['input']>;
  status?: InputMaybe<SpaceJoinRequestStatus>;
};


export type QuerySpaceMemberArgs = {
  memberId: Scalars['ID']['input'];
  spaceId: Scalars['ID']['input'];
};


export type QuerySpaceMembersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<SpaceMemberListOrderByEnum>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
  roleIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  spaceId: Scalars['ID']['input'];
};


export type QuerySpaceMembershipRequestsArgs = {
  spaceId: Scalars['ID']['input'];
  status?: InputMaybe<SpaceJoinRequestStatus>;
};


export type QuerySpacePinnedPostsArgs = {
  spaceId: Scalars['ID']['input'];
};


export type QuerySpacePostTypeArgs = {
  postTypeId: Scalars['ID']['input'];
  spaceId: Scalars['ID']['input'];
};


export type QuerySpacePostTypesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  context?: InputMaybe<PostTypeContext>;
  limit: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
  spaceId: Scalars['ID']['input'];
};


export type QuerySpaceRolesArgs = {
  orderBy?: InputMaybe<SpaceRoleListOrderByEnum>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
  spaceId?: InputMaybe<Scalars['ID']['input']>;
};


export type QuerySpacesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  collectionId?: InputMaybe<Scalars['String']['input']>;
  exploreOnly?: InputMaybe<Scalars['Boolean']['input']>;
  filterBy?: InputMaybe<Array<EntityListFilterByInput>>;
  limit: Scalars['Int']['input'];
  memberId?: InputMaybe<Scalars['ID']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<SpaceListOrderByEnum>;
  orderByString?: InputMaybe<Scalars['String']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Array<SpaceType>>;
};


export type QuerySpacesByIdsArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type QuerySpacesBySlugsArgs = {
  slugs: Array<Scalars['String']['input']>;
};


export type QuerySsoMembershipsArgs = {
  memberId: Scalars['String']['input'];
};


export type QuerySsoUrlArgs = {
  input: SsoUrlInput;
};


export type QuerySsosArgs = {
  status?: InputMaybe<SsoStatus>;
};


export type QuerySubscriptionArgs = {
  input: SubscriptionInput;
};


export type QuerySubscriptionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
  publisherType?: InputMaybe<PublisherType>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QuerySupportNetworkTokensArgs = {
  networkId: Scalars['String']['input'];
};


export type QuerySupportSsoUrlArgs = {
  input?: InputMaybe<SupportSsoUrlInput>;
};


export type QueryTagPostsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
  spaceId?: InputMaybe<Scalars['ID']['input']>;
  tagId?: InputMaybe<Scalars['ID']['input']>;
  tagSlug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTagsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  limit: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TagsOrderByEnum>;
  query?: InputMaybe<Scalars['String']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
  spaceId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryTemplateArgs = {
  id: Scalars['String']['input'];
};


export type QueryTemplateRequestArgs = {
  id: Scalars['String']['input'];
};


export type QueryTemplatesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  categories?: InputMaybe<Array<Scalars['String']['input']>>;
  entityTypes?: InputMaybe<Array<TemplateEntityType>>;
  limit: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<StoreItemStatus>;
};


export type QueryTokensArgs = {
  networkDomain?: InputMaybe<Scalars['String']['input']>;
  networkId?: InputMaybe<Scalars['ID']['input']>;
  otp?: InputMaybe<Scalars['String']['input']>;
  refreshToken?: InputMaybe<Scalars['String']['input']>;
  ssoToken?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTranslateMarkupArgs = {
  format?: InputMaybe<TranslationMarkupFormat>;
  input?: InputMaybe<Array<TranslationMarkupInput>>;
  markups?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type QueryUsernameAvailabilityArgs = {
  username: Scalars['String']['input'];
};

export type RangeInput = {
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
};

export type ReOrderSchemaFieldInput = {
  index: Scalars['Int']['input'];
  key: Scalars['String']['input'];
};

export enum ReactionType {
  EmojiBase = 'EMOJI_BASE',
  LikeBase = 'LIKE_BASE',
  VoteBase = 'VOTE_BASE'
}

export type Redirect = {
  __typename?: 'Redirect';
  resolvedUrl: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export enum RelationTypeOptions {
  Media = 'Media',
  Member = 'Member',
  Post = 'Post',
  Space = 'Space',
  Tag = 'Tag'
}

export type ReorderBadgeInput = {
  /** The id of the badge that will be directly before the moved badge. If not provided, the badge will be moved to the beginning of the list */
  previousBadgeId?: InputMaybe<Scalars['String']['input']>;
};

export type ReorderBadgesInput = {
  /** The new order of the badges in the network. This must contain all active badges in the network */
  badgeOrderIds: Array<Scalars['String']['input']>;
};

export type Report = {
  __typename?: 'Report';
  data?: Maybe<Array<ReportData>>;
  description?: Maybe<Scalars['String']['output']>;
  endDate?: Maybe<Scalars['DateTime']['output']>;
  previousValue?: Maybe<Scalars['String']['output']>;
  slug: Scalars['String']['output'];
  startDate?: Maybe<Scalars['DateTime']['output']>;
  title: Scalars['String']['output'];
  tooltip?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export enum ReportCategory {
  Harassment = 'HARASSMENT',
  Misinformation = 'MISINFORMATION',
  Nudity = 'NUDITY',
  Spam = 'SPAM',
  Suicide = 'SUICIDE',
  Terrorism = 'TERRORISM',
  Violence = 'VIOLENCE'
}

export type ReportData = {
  __typename?: 'ReportData';
  description?: Maybe<Scalars['String']['output']>;
  key: Scalars['String']['output'];
  previousValue?: Maybe<ReportDataValue>;
  type: ReportDataType;
  value: ReportDataValue;
};

export enum ReportDataType {
  ChartData = 'chartData',
  EntityReport = 'entityReport',
  IntValue = 'intValue',
  StringValue = 'stringValue'
}

export type ReportDataValue = ChartData | EntityReport | IntValue | StringValue;

export type ReportEntities = {
  __typename?: 'ReportEntities';
  actor?: Maybe<Member>;
  app?: Maybe<App>;
  member?: Maybe<Member>;
  network?: Maybe<Network>;
  person?: Maybe<Member>;
  post?: Maybe<Post>;
  space?: Maybe<Space>;
  tag?: Maybe<Tag>;
};

export type ReportInput = {
  endDate?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  slug: ReportSlug;
  sort?: InputMaybe<ColumnSortInput>;
  startDate?: InputMaybe<Scalars['String']['input']>;
  timeFrame?: InputMaybe<ReportTimeFrame>;
  timeZone: Scalars['String']['input'];
};

export type ReportPayload = {
  __typename?: 'ReportPayload';
  key: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type ReportRecord = {
  __typename?: 'ReportRecord';
  entities: ReportEntities;
  payload: Array<ReportPayload>;
};

export enum ReportSlug {
  ActiveMembers = 'activeMembers',
  AverageDailyActiveMembers = 'averageDailyActiveMembers',
  Highlights = 'highlights',
  MemberScore = 'memberScore',
  NewMembersOverTime = 'newMembersOverTime',
  NewPosts = 'newPosts',
  NewReactions = 'newReactions',
  NewReplies = 'newReplies',
  PopularDaysOfWeek = 'popularDaysOfWeek',
  PopularHoursOfDay = 'popularHoursOfDay',
  PostsVSreplies = 'postsVSreplies',
  TopMembers = 'topMembers',
  TopPosts = 'topPosts',
  TopSpaces = 'topSpaces',
  TotalMembers = 'totalMembers',
  TotalPosts = 'totalPosts',
  TotalReactions = 'totalReactions',
  TotalReplies = 'totalReplies',
  TotalVisitors = 'totalVisitors',
  TrendingTags = 'trendingTags'
}

export enum ReportTimeFrame {
  AllTime = 'allTime',
  LastCalendarQuarter = 'lastCalendarQuarter',
  LastCalendarYear = 'lastCalendarYear',
  LastMonth = 'lastMonth',
  LastNinetyDays = 'lastNinetyDays',
  LastSevenDays = 'lastSevenDays',
  LastThirtyDays = 'lastThirtyDays',
  LastTwelveMonth = 'lastTwelveMonth',
  LastWeek = 'lastWeek',
  Today = 'today',
  Yesterday = 'yesterday'
}

export type ReportableEntity = Member | Post | Space | Tag;

export enum ReportableEntityType {
  Member = 'member',
  Post = 'post',
  Space = 'space'
}

export type RequestGlobalTokenInput = {
  captchaToken?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
};

export type ResetPasswordInput = {
  email: Scalars['String']['input'];
};

export enum RichTextTypeOptions {
  Html = 'html',
  Markup = 'markup'
}

export type Role = {
  __typename?: 'Role';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  scopes: Array<Scalars['String']['output']>;
  type?: Maybe<RoleType>;
  visible: Scalars['Boolean']['output'];
};

export enum RoleListOrderByEnum {
  CreatedAt = 'CREATED_AT',
  UpdatedAt = 'UPDATED_AT'
}

export enum RoleType {
  Admin = 'admin',
  Guest = 'guest',
  Member = 'member',
  Moderator = 'moderator'
}

export type Scopes = {
  __typename?: 'Scopes';
  contextAwareScopes: Array<ContextScopes>;
  scopes: Array<Scalars['String']['output']>;
};

export type SearchEntity = {
  __typename?: 'SearchEntity';
  by?: Maybe<By>;
  content?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['DateTime']['output']>;
  entity?: Maybe<SearchObjectEntity>;
  entityId?: Maybe<Scalars['String']['output']>;
  entityType: SearchEntityType;
  id: Scalars['ID']['output'];
  in?: Maybe<In>;
  media?: Maybe<Media>;
  subtitle?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Array<Scalars['String']['output']>>;
  title: Scalars['String']['output'];
  url?: Maybe<Scalars['String']['output']>;
};

export type SearchEntityGroup = {
  __typename?: 'SearchEntityGroup';
  entityType: SearchEntityType;
  hits: Array<SearchEntity>;
};

export enum SearchEntityType {
  External = 'External',
  Member = 'member',
  Post = 'post',
  Space = 'space'
}

export type SearchInput = {
  filters?: InputMaybe<Array<DeprecatedFiltersInput>>;
  includeExternal?: InputMaybe<Scalars['Boolean']['input']>;
  query: Scalars['String']['input'];
};

export type SearchMembersForSpaceInvitationInput = {
  query: Scalars['String']['input'];
  spaceId: Scalars['ID']['input'];
};

export type SearchObjectEntity = Member | Post | Space;

export type SearchResult = {
  __typename?: 'SearchResult';
  hits: Array<SearchEntityGroup>;
  totalCount: Scalars['Float']['output'];
};

export type Settings = {
  __typename?: 'Settings';
  captcha?: Maybe<CaptchaSettings>;
  contentTranslation?: Maybe<ContentTranslationSettings>;
  emailDigestEnabled: Scalars['Boolean']['output'];
  emailEnabled: Scalars['Boolean']['output'];
  emailFrom?: Maybe<Scalars['String']['output']>;
  emailNotificationEnabled: Scalars['Boolean']['output'];
  fileSizeLimit: Scalars['Float']['output'];
  fileTypesLimit: Array<Scalars['String']['output']>;
  imageSizeLimit: Scalars['Float']['output'];
  imageTypesLimit: Array<Scalars['String']['output']>;
  memberPermissions?: Maybe<MembersPermissionSettings>;
  /** @deprecated This field will be replaced by privateMessaging.membersCanTurnOffPrivateMessaging */
  membersCanTurnOffPrivateMessaging?: Maybe<Scalars['Boolean']['output']>;
  /** @deprecated This field will be replaced by privateMessaging.membersCanUsePrivateMessaging */
  membersCanUsePrivateMessaging?: Maybe<Scalars['Boolean']['output']>;
  privateMessaging?: Maybe<PrivateMessagingSettings>;
  /** @deprecated This field will be replaced by privateMessaging.privateMessagingEnabled */
  privateMessagingEnabled?: Maybe<Scalars['Boolean']['output']>;
};

export enum ShortContentFormat {
  Html = 'Html',
  Text = 'Text'
}

export type Shortcut = {
  __typename?: 'Shortcut';
  app?: Maybe<App>;
  appId: Scalars['ID']['output'];
  description?: Maybe<Scalars['String']['output']>;
  favicon?: Maybe<Media>;
  faviconId?: Maybe<Scalars['ID']['output']>;
  key: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type SignedUrl = {
  __typename?: 'SignedUrl';
  fields: Scalars['String']['output'];
  mediaDownloadUrl: Scalars['String']['output'];
  mediaId: Scalars['ID']['output'];
  mediaUrl: Scalars['String']['output'];
  signedUrl: Scalars['String']['output'];
  urls?: Maybe<MediaUrls>;
};

export type Sitemap = {
  __typename?: 'Sitemap';
  /** The id of the sitemap item */
  id: Scalars['ID']['output'];
  lastModifiedAt: Scalars['DateTime']['output'];
  url: Scalars['String']['output'];
};

export type SitemapEdge = {
  __typename?: 'SitemapEdge';
  cursor: Scalars['String']['output'];
  node: Sitemap;
};

export type Slate = {
  __typename?: 'Slate';
  blocks: Array<Block>;
  id?: Maybe<Scalars['String']['output']>;
  restrictions?: Maybe<SlateRestrictions>;
  rootBlock: Scalars['String']['output'];
};

export type SlateInput = {
  blocks: Array<BlockInput>;
  rootBlock: Scalars['String']['input'];
};

export type SlateRestrictions = {
  __typename?: 'SlateRestrictions';
  lockedChildrenBlocks?: Maybe<Array<Scalars['String']['output']>>;
  nonEditableBlocks?: Maybe<Array<Scalars['String']['output']>>;
  nonRemovableBlocks?: Maybe<Array<Scalars['String']['output']>>;
};

export type SlateUpdatesInput = {
  addedBlocks?: InputMaybe<Array<BlockInput>>;
  removedBlocks?: InputMaybe<Array<Scalars['String']['input']>>;
  rootBlock?: InputMaybe<Scalars['String']['input']>;
  updatedBlocks?: InputMaybe<Array<UpdateBlockInput>>;
};

export enum SortOrder {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type Space = {
  __typename?: 'Space';
  address: SpaceAddress;
  authMemberProps?: Maybe<SpaceAuthMemberProps>;
  banner?: Maybe<Media>;
  bannerId?: Maybe<Scalars['ID']['output']>;
  collection?: Maybe<Collection>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Member>;
  createdById: Scalars['ID']['output'];
  customOrderingIndexInGroup: Scalars['Float']['output'];
  customSeoDetail?: Maybe<CustomSeoDetail>;
  description?: Maybe<Scalars['String']['output']>;
  externalId?: Maybe<Scalars['ID']['output']>;
  externalUrl?: Maybe<Scalars['String']['output']>;
  groupId?: Maybe<Scalars['ID']['output']>;
  hidden?: Maybe<Scalars['Boolean']['output']>;
  highlightedTagIds: Array<Scalars['ID']['output']>;
  highlightedTags?: Maybe<Array<Tag>>;
  id: Scalars['ID']['output'];
  image?: Maybe<Media>;
  imageId?: Maybe<Scalars['ID']['output']>;
  /** @deprecated We no longer support app installation on space */
  installedApps?: Maybe<PaginatedAppInstallation>;
  inviteOnly?: Maybe<Scalars['Boolean']['output']>;
  isHomepage?: Maybe<Scalars['Boolean']['output']>;
  isNewUserHomepage?: Maybe<Scalars['Boolean']['output']>;
  isReturningUserHomepage?: Maybe<Scalars['Boolean']['output']>;
  key: Scalars['String']['output'];
  layout: Scalars['String']['output'];
  members?: Maybe<PaginatedSpaceMember>;
  membersCount: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  network?: Maybe<Network>;
  networkId: Scalars['ID']['output'];
  nonAdminsCanInvite?: Maybe<Scalars['Boolean']['output']>;
  pinnedPosts?: Maybe<Array<Post>>;
  posts?: Maybe<PaginatedPost>;
  postsCount?: Maybe<Scalars['Int']['output']>;
  private?: Maybe<Scalars['Boolean']['output']>;
  relativeUrl?: Maybe<Scalars['String']['output']>;
  roles?: Maybe<Array<SpaceRole>>;
  seoDetail?: Maybe<SpaceSeoDetail>;
  shortcuts?: Maybe<Array<Shortcut>>;
  slate?: Maybe<Slate>;
  slug: Scalars['String']['output'];
  subscribersCount?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Space tag filters is a retired concept and is no longer used. */
  tagFilter?: Maybe<TagFilter>;
  /** @deprecated This field is deprecated. Use `tags` query instead. */
  tags?: Maybe<PaginatedTag>;
  type: SpaceType;
  updatedAt: Scalars['DateTime']['output'];
  url?: Maybe<Scalars['String']['output']>;
  whoCanPost?: Maybe<Array<Scalars['ID']['output']>>;
  whoCanReact?: Maybe<Array<Scalars['ID']['output']>>;
  whoCanReply?: Maybe<Array<Scalars['ID']['output']>>;
};


export type SpaceInstalledAppsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<AppInstallationStatus>;
};


export type SpaceMembersArgs = {
  limit: Scalars['Int']['input'];
};


export type SpacePostsArgs = {
  excludePins?: InputMaybe<Scalars['Boolean']['input']>;
  limit: Scalars['Int']['input'];
};


export type SpaceTagsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TagListOrderByEnum>;
  query?: InputMaybe<Scalars['String']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SpaceAddress = {
  __typename?: 'SpaceAddress';
  editable: Scalars['Boolean']['output'];
  exact: Scalars['Boolean']['output'];
  path: Scalars['String']['output'];
};

export type SpaceAddressInput = {
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  exact: Scalars['Boolean']['input'];
  path: Scalars['String']['input'];
};

export type SpaceAuthMemberProps = {
  __typename?: 'SpaceAuthMemberProps';
  availablePostTypes?: Maybe<Array<PostType>>;
  context: PermissionContext;
  lastReadAt?: Maybe<Scalars['DateTime']['output']>;
  membershipStatus?: Maybe<SpaceMembershipStatus>;
  permissions?: Maybe<Array<ActionPermissions>>;
  scopes?: Maybe<Array<Scalars['String']['output']>>;
  spaceMember?: Maybe<SpaceMember>;
  subscribed?: Maybe<Scalars['Boolean']['output']>;
  unreadPostsCount?: Maybe<Scalars['Int']['output']>;
};

export type SpaceEdge = {
  __typename?: 'SpaceEdge';
  cursor: Scalars['String']['output'];
  node: Space;
};

export type SpaceJoinRequest = {
  __typename?: 'SpaceJoinRequest';
  id: Scalars['ID']['output'];
  member?: Maybe<Member>;
  spaceId: Scalars['ID']['output'];
  status: SpaceJoinRequestStatus;
};

export type SpaceJoinRequestEdge = {
  __typename?: 'SpaceJoinRequestEdge';
  cursor: Scalars['String']['output'];
  node: SpaceJoinRequest;
};

export enum SpaceJoinRequestStatus {
  Completed = 'COMPLETED',
  Declined = 'DECLINED',
  Pending = 'PENDING'
}

export enum SpaceListOrderByEnum {
  CreatedAt = 'CREATED_AT',
  CustomOrderingIndex = 'CUSTOM_ORDERING_INDEX',
  UpdatedAt = 'UPDATED_AT'
}

export type SpaceMember = {
  __typename?: 'SpaceMember';
  member?: Maybe<Member>;
  role?: Maybe<SpaceRole>;
  space?: Maybe<Space>;
};

export enum SpaceMemberAffiliation {
  Joined = 'Joined',
  NotJoined = 'NotJoined',
  RequestedToJoin = 'RequestedToJoin',
  UnableToJoin = 'UnableToJoin'
}

export type SpaceMemberEdge = {
  __typename?: 'SpaceMemberEdge';
  cursor: Scalars['String']['output'];
  node: SpaceMember;
};

export enum SpaceMemberListOrderByEnum {
  CreatedAt = 'CREATED_AT',
  UpdatedAt = 'UPDATED_AT'
}

export enum SpaceMembershipStatus {
  Archived = 'Archived',
  Closed = 'Closed',
  Joined = 'joined',
  NotJoined = 'notJoined',
  Requested = 'requested'
}

export type SpacePostType = {
  __typename?: 'SpacePostType';
  postType?: Maybe<PostType>;
  postTypeId: Scalars['ID']['output'];
  space?: Maybe<Space>;
  spaceId: Scalars['ID']['output'];
  whoCanPost?: Maybe<Array<Scalars['ID']['output']>>;
  whoCanReact?: Maybe<Array<Scalars['ID']['output']>>;
  whoCanReply?: Maybe<Array<Scalars['ID']['output']>>;
};

export type SpacePostTypeEdge = {
  __typename?: 'SpacePostTypeEdge';
  cursor: Scalars['String']['output'];
  node: SpacePostType;
};

export type SpaceRole = {
  __typename?: 'SpaceRole';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  network?: Maybe<Network>;
  scopes: Array<Scalars['String']['output']>;
  type?: Maybe<SpaceRoleType>;
};

export enum SpaceRoleListOrderByEnum {
  CreatedAt = 'CREATED_AT',
  UpdatedAt = 'UPDATED_AT'
}

export enum SpaceRoleType {
  Admin = 'admin',
  Member = 'member'
}

export type SpaceSeoDetail = {
  __typename?: 'SpaceSeoDetail';
  description?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Media>;
  title: Scalars['String']['output'];
};

export type SpaceSeoDetailInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  imageId?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export enum SpaceType {
  Broadcast = 'Broadcast',
  Entity = 'Entity',
  Group = 'Group',
  Page = 'Page',
  PrivateMessage = 'PrivateMessage'
}

export type Sso = {
  __typename?: 'Sso';
  allowSignUp?: Maybe<Scalars['Boolean']['output']>;
  authorizationUrl?: Maybe<Scalars['String']['output']>;
  buttonText?: Maybe<Scalars['String']['output']>;
  clientId?: Maybe<Scalars['String']['output']>;
  clientSecret?: Maybe<Scalars['String']['output']>;
  defaultRelayState?: Maybe<Scalars['String']['output']>;
  idpUrl?: Maybe<Scalars['String']['output']>;
  logoutUrl?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  provider?: Maybe<SsoProvider>;
  scopes?: Maybe<Array<Scalars['String']['output']>>;
  settingsUrl?: Maybe<Scalars['String']['output']>;
  signUpUrl?: Maybe<Scalars['String']['output']>;
  status: SsoStatus;
  tokenUrl?: Maybe<Scalars['String']['output']>;
  type: SsoType;
  userProfileUrl?: Maybe<Scalars['String']['output']>;
};

export type SsoMembership = {
  __typename?: 'SsoMembership';
  id: Scalars['String']['output'];
  memberId: Scalars['String']['output'];
  ssoType: SsoType;
};

export enum SsoProvider {
  Auth0 = 'auth0',
  Custom = 'custom',
  Memberful = 'memberful',
  Okta = 'okta',
  Outseta = 'outseta',
  Wordpress = 'wordpress'
}

export enum SsoStatus {
  Disable = 'disable',
  Enable = 'enable'
}

export enum SsoType {
  Apple = 'Apple',
  Discord = 'Discord',
  Saml = 'Saml',
  Slack = 'Slack',
  Facebook = 'facebook',
  Google = 'google',
  Jwt = 'jwt',
  Linkedin = 'linkedin',
  Oauth2 = 'oauth2'
}

export type SsoUrl = {
  __typename?: 'SsoUrl';
  url: Scalars['String']['output'];
};

export type SsoUrlInput = {
  callbackUrl?: InputMaybe<Scalars['String']['input']>;
  invitationLinkId?: InputMaybe<Scalars['String']['input']>;
  invitationToken?: InputMaybe<Scalars['String']['input']>;
  redirectUri?: InputMaybe<Scalars['String']['input']>;
  type: SsoType;
};

export enum StaffReason {
  NetworkStaffRole = 'NetworkStaffRole',
  SamlSso = 'SamlSso',
  SpaceStaffRole = 'SpaceStaffRole'
}

export type StatusReason = {
  __typename?: 'StatusReason';
  changedAt: Scalars['DateTime']['output'];
  changedBy: NetworkStatusChangedBy;
  changedById?: Maybe<Scalars['String']['output']>;
  reason?: Maybe<NetworkStatusReason>;
};

export enum StoreItemStanding {
  Official = 'OFFICIAL',
  Regular = 'REGULAR',
  Verified = 'VERIFIED'
}

export enum StoreItemStatus {
  Deleted = 'DELETED',
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type StringValue = {
  __typename?: 'StringValue';
  string: Scalars['String']['output'];
};

export type Subscriber = {
  __typename?: 'Subscriber';
  emailDigestEnabled: Scalars['Boolean']['output'];
  emailDigestSendFrequency: EmailDigestFrequency;
  emailDigestWeeklySendDay: DayOfWeek;
  /** @deprecated Use instantEmailTriggers instead. */
  emailSubscriptionEnabled?: Maybe<Scalars['Boolean']['output']>;
  fcmDeviceTokens: Array<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** Array of instant email triggers that the subscriber will receive. Similar to notification triggers, these can include various events that prompt an immediate email. If this array is empty, the subscriber will not receive any instant emails. */
  instantEmailTriggers: Array<NotificationTrigger>;
  /** @deprecated Use instantEmailTriggers instead. */
  mentionEmailEnabled?: Maybe<Scalars['Boolean']['output']>;
  /** @deprecated Use notificationTriggers instead. */
  mentionSubscriptionEnabled?: Maybe<Scalars['Boolean']['output']>;
  /** @deprecated Use instantEmailTriggers instead. */
  messageEmailEnabled?: Maybe<Scalars['Boolean']['output']>;
  networkId: Scalars['String']['output'];
  /** Array of notification triggers that the subscriber will receive. If this array is empty, the subscriber will not receive any notifications. */
  notificationTriggers: Array<NotificationTrigger>;
  /** @deprecated Use instantEmailTriggers instead. */
  reactionEmailEnabled?: Maybe<Scalars['Boolean']['output']>;
  /** @deprecated Use notificationTriggers instead. */
  reactionSubscriptionEnabled?: Maybe<Scalars['Boolean']['output']>;
};

export type SubscriberEdge = {
  __typename?: 'SubscriberEdge';
  cursor: Scalars['String']['output'];
  node: Subscriber;
};

export type Subscription = {
  __typename?: 'Subscription';
  ask: Scalars['String']['output'];
  network: Network;
  post: Post;
  space: Space;
};


export type SubscriptionAskArgs = {
  question: Scalars['String']['input'];
};

export type SubscriptionCheckoutSession = {
  __typename?: 'SubscriptionCheckoutSession';
  url: Scalars['String']['output'];
};

export type SubscriptionInformation = {
  __typename?: 'SubscriptionInformation';
  addons?: Maybe<Array<AddonInformation>>;
  currentProduct?: Maybe<BillingProduct>;
  isManual: Scalars['Boolean']['output'];
  planId?: Maybe<Scalars['String']['output']>;
  planName?: Maybe<Scalars['String']['output']>;
  planPriceId?: Maybe<Scalars['String']['output']>;
  planPriceInterval?: Maybe<BillingPriceInterval>;
};

export enum SubscriptionStatus {
  Active = 'active',
  Canceled = 'canceled',
  Failed = 'failed',
  Incomplete = 'incomplete',
  IncompleteExpired = 'incomplete_expired',
  PastDue = 'past_due',
  Trialing = 'trialing',
  Unpaid = 'unpaid'
}

export type SupportAuthToken = {
  __typename?: 'SupportAuthToken';
  accessToken: Scalars['String']['output'];
  refreshToken: Scalars['String']['output'];
};

export type SupportLimitedAuthToken = {
  __typename?: 'SupportLimitedAuthToken';
  accessToken: Scalars['String']['output'];
  member: Member;
};

export type SupportSsoUrl = {
  __typename?: 'SupportSsoUrl';
  url: Scalars['String']['output'];
};

export type SupportSsoUrlInput = {
  callbackUrl?: InputMaybe<Scalars['String']['input']>;
};

export type Tag = {
  __typename?: 'Tag';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  slug: Scalars['String']['output'];
  /** @deprecated Tags are network-level objects. spaceId is no longer required to identify them. */
  spaceId?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};

export type TagEdge = {
  __typename?: 'TagEdge';
  cursor: Scalars['String']['output'];
  node: Tag;
};

export type TagFilter = {
  __typename?: 'TagFilter';
  filterType: TagFilterType;
  filters: Array<Scalars['String']['output']>;
};

export enum TagFilterType {
  Blacklist = 'BLACKLIST',
  Whitelist = 'WHITELIST'
}

export enum TagListOrderByEnum {
  CreatedAt = 'CREATED_AT',
  Id = 'ID',
  UpdatedAt = 'UPDATED_AT'
}

export enum TagsOrderByEnum {
  CreatedAt = 'CREATED_AT',
  Id = 'ID',
  UpdatedAt = 'UPDATED_AT'
}

export type Template = {
  __typename?: 'Template';
  about?: Maybe<Scalars['String']['output']>;
  appIds: Array<Scalars['String']['output']>;
  apps?: Maybe<Array<App>>;
  authorName?: Maybe<Scalars['String']['output']>;
  authorUrl?: Maybe<Scalars['String']['output']>;
  banner?: Maybe<Media>;
  bannerId?: Maybe<Scalars['ID']['output']>;
  categories: Array<Scalars['String']['output']>;
  comingSoon: Scalars['Boolean']['output'];
  contentTypes?: Maybe<Array<ContentTypeTemplate>>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Member>;
  createdById?: Maybe<Scalars['ID']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  embedIds: Array<Scalars['ID']['output']>;
  embeds?: Maybe<Array<Embed>>;
  entity?: Maybe<TemplateEntity>;
  entityId?: Maybe<Scalars['String']['output']>;
  entityProperties: Scalars['String']['output'];
  entityType: TemplateEntityType;
  favicon?: Maybe<Media>;
  faviconId?: Maybe<Scalars['ID']['output']>;
  hubContent?: Maybe<HubContent>;
  hubContentId?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<Media>;
  imageId?: Maybe<Scalars['ID']['output']>;
  imageIds: Array<Scalars['ID']['output']>;
  images?: Maybe<Array<Media>>;
  installed?: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
  network?: Maybe<Network>;
  networkId: Scalars['ID']['output'];
  previewHtml?: Maybe<Scalars['String']['output']>;
  privacyPolicyUrl?: Maybe<Scalars['String']['output']>;
  requiredPlan?: Maybe<PlanName>;
  requiredTemplateIds: Array<Scalars['String']['output']>;
  /** @deprecated Use contentTypes instead */
  requiredTemplates?: Maybe<Array<Template>>;
  slate?: Maybe<Slate>;
  slug: Scalars['String']['output'];
  standing: StoreItemStanding;
  status: StoreItemStatus;
  syncedAt?: Maybe<Scalars['DateTime']['output']>;
  termsOfServiceUrl?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  updatedBy?: Maybe<Member>;
  updatedById?: Maybe<Scalars['ID']['output']>;
};

export type TemplateCreatedEntity = Space;

export type TemplateEdge = {
  __typename?: 'TemplateEdge';
  cursor: Scalars['String']['output'];
  node: Template;
};

export type TemplateEntity = Network | Post | PostType | Space | SpacePostType | Tag;

export enum TemplateEntityType {
  Collection = 'Collection',
  Network = 'Network',
  Post = 'Post',
  PostType = 'PostType',
  Space = 'Space',
  SpacePostType = 'SpacePostType',
  Tag = 'Tag'
}

export type TemplateFieldMapping = {
  __typename?: 'TemplateFieldMapping';
  from: Scalars['String']['output'];
  to: Scalars['String']['output'];
};

export type TemplateFieldMappingInput = {
  from: Scalars['String']['input'];
  to: Scalars['String']['input'];
};

export type TemplateRequest = {
  __typename?: 'TemplateRequest';
  createdAt: Scalars['DateTime']['output'];
  createdById: Scalars['String']['output'];
  createdEntity?: Maybe<TemplateCreatedEntity>;
  createdEntityAt?: Maybe<Scalars['DateTime']['output']>;
  createdEntityId?: Maybe<Scalars['String']['output']>;
  createdEntityType: TemplateEntityType;
  id: Scalars['String']['output'];
  networkId?: Maybe<Scalars['String']['output']>;
  processedPercentage: Scalars['Float']['output'];
  status: TemplateRequestStatus;
  templateId: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export enum TemplateRequestStatus {
  Failed = 'Failed',
  InProgress = 'InProgress',
  Succeeded = 'Succeeded'
}

export type TemplatesMapping = {
  __typename?: 'TemplatesMapping';
  fields?: Maybe<Array<TemplateFieldMapping>>;
  from?: Maybe<Scalars['String']['output']>;
  to?: Maybe<Scalars['String']['output']>;
};

export type TemplatesMappingInput = {
  fields?: InputMaybe<Array<TemplateFieldMappingInput>>;
  from: Scalars['String']['input'];
  to: Scalars['String']['input'];
};

export type TestAppWebhookInput = {
  webhookUrl: Scalars['String']['input'];
};

export enum TextTypeOptions {
  FullText = 'fullText',
  ShortText = 'shortText'
}

export type Theme = {
  __typename?: 'Theme';
  name: Scalars['String']['output'];
  status: ThemeStatus;
  tokens: ThemeTokens;
};

export type ThemeColor = {
  __typename?: 'ThemeColor';
  key: Scalars['String']['output'];
  weights: Array<ThemeToken>;
};

export type ThemeColorToken = {
  __typename?: 'ThemeColorToken';
  key: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type ThemeColorTokens = {
  __typename?: 'ThemeColorTokens';
  dark?: Maybe<Array<ThemeColorToken>>;
  light?: Maybe<Array<ThemeColorToken>>;
};

export type ThemeColors = {
  __typename?: 'ThemeColors';
  dark?: Maybe<Array<ThemeColor>>;
  light?: Maybe<Array<ThemeColor>>;
};

export enum ThemeStatus {
  Draft = 'draft',
  Published = 'published'
}

export type ThemeToken = {
  __typename?: 'ThemeToken';
  key: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type ThemeTokens = {
  __typename?: 'ThemeTokens';
  breakpoints?: Maybe<Array<ThemeToken>>;
  colors?: Maybe<Array<ThemeToken>>;
  fontSizes?: Maybe<Array<ThemeToken>>;
  fontWeights?: Maybe<Array<ThemeToken>>;
  opacity?: Maybe<Array<ThemeToken>>;
  shadows?: Maybe<Array<ThemeToken>>;
  sizes?: Maybe<Array<ThemeToken>>;
  textStyles?: Maybe<Array<ThemeToken>>;
  zIndices?: Maybe<Array<ThemeToken>>;
};

export type Themes = {
  __typename?: 'Themes';
  active: Theme;
  drafts?: Maybe<Array<Theme>>;
  published: Array<Theme>;
};

export type Toast = {
  __typename?: 'Toast';
  description?: Maybe<Scalars['String']['output']>;
  duration?: Maybe<Scalars['Float']['output']>;
  status?: Maybe<ToastStatus>;
  title?: Maybe<Scalars['String']['output']>;
};

export enum ToastStatus {
  Error = 'Error',
  Info = 'Info',
  Neutral = 'Neutral',
  Success = 'Success',
  Warning = 'Warning'
}

export type TopNavigation = {
  __typename?: 'TopNavigation';
  alignment: TopNavigationAlignment;
  enabled: Scalars['Boolean']['output'];
  items: Array<NavigationItem>;
};

export enum TopNavigationAlignment {
  Center = 'CENTER',
  Left = 'LEFT',
  Right = 'RIGHT'
}

export enum TranslationMarkupFormat {
  Html = 'HTML',
  Text = 'TEXT'
}

export type TranslationMarkupInput = {
  format: TranslationMarkupFormat;
  markup: Scalars['String']['input'];
};

export enum UnauthorizedReason {
  Access = 'ACCESS',
  Plan = 'PLAN'
}

export enum UnsubscribeTokenContext {
  All = 'ALL',
  Member = 'MEMBER',
  Mentions = 'MENTIONS',
  Post = 'POST',
  Reactions = 'REACTIONS',
  Space = 'SPACE'
}

export type UnsubscribeWithTokenInput = {
  context: UnsubscribeTokenContext;
  entityId?: InputMaybe<Scalars['String']['input']>;
  token: Scalars['String']['input'];
};

export type UpdateAccessGroupInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  entityId?: InputMaybe<Scalars['ID']['input']>;
  entityType?: InputMaybe<AccessGroupEntityType>;
  info?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateAppCustomCodes = {
  body?: InputMaybe<Scalars['String']['input']>;
  head?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateAppInput = {
  about?: InputMaybe<Scalars['String']['input']>;
  authorName?: InputMaybe<Scalars['String']['input']>;
  authorUrl?: InputMaybe<Scalars['String']['input']>;
  bannerId?: InputMaybe<Scalars['String']['input']>;
  comingSoon?: InputMaybe<Scalars['Boolean']['input']>;
  customCodes?: InputMaybe<UpdateAppCustomCodes>;
  description?: InputMaybe<Scalars['String']['input']>;
  docsUrl?: InputMaybe<Scalars['String']['input']>;
  faviconId?: InputMaybe<Scalars['String']['input']>;
  imageId?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  privacyPolicyUrl?: InputMaybe<Scalars['String']['input']>;
  requiredPermissions?: InputMaybe<Array<PrimaryScopes>>;
  requiredPlan?: InputMaybe<PlanName>;
  slug?: InputMaybe<Scalars['String']['input']>;
  termsOfServiceUrl?: InputMaybe<Scalars['String']['input']>;
  webhookSubscriptions?: InputMaybe<Array<Scalars['String']['input']>>;
  webhookUrl?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateAppInstallationInput = {
  permissions?: InputMaybe<Array<PrimaryScopes>>;
  templatesMappings?: InputMaybe<AppInstallationTemplatesMappingsInput>;
};

export type UpdateBadgeInput = {
  active: Scalars['Boolean']['input'];
  backgroundColor?: InputMaybe<Scalars['String']['input']>;
  daysUntilExpired?: InputMaybe<Scalars['Float']['input']>;
  imageId?: InputMaybe<Scalars['ID']['input']>;
  longDescription?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  settings?: InputMaybe<Array<BadgeSettingsInput>>;
  shortDescription: Scalars['String']['input'];
  text?: InputMaybe<Scalars['String']['input']>;
  textColor?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateBlockInput = {
  children?: InputMaybe<Scalars['String']['input']>;
  extraProps?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  output?: InputMaybe<Scalars['String']['input']>;
  props?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateCollectionInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UpdateCustomFieldSchemaInput = {
  default?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  externalKeys?: InputMaybe<Array<Scalars['String']['input']>>;
  items?: InputMaybe<BaseCustomFieldSchemaInput>;
  key: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  properties?: InputMaybe<Array<BaseCustomFieldSchemaInput>>;
  readPrivacy?: InputMaybe<CustomFieldPrivacyInput>;
  required?: InputMaybe<Scalars['Boolean']['input']>;
  settings?: InputMaybe<Array<CustomFieldSettingsInput>>;
  validators?: InputMaybe<Array<CustomFieldValidatorInput>>;
  writePrivacy?: InputMaybe<CustomFieldPrivacyInput>;
};

export type UpdateCustomSsoInput = {
  allowSignUp?: InputMaybe<Scalars['Boolean']['input']>;
  authorizationUrl?: InputMaybe<Scalars['String']['input']>;
  buttonText?: InputMaybe<Scalars['String']['input']>;
  clientId?: InputMaybe<Scalars['String']['input']>;
  clientSecret?: InputMaybe<Scalars['String']['input']>;
  idpUrl?: InputMaybe<Scalars['String']['input']>;
  logoutUrl?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<SsoProvider>;
  scopes?: InputMaybe<Array<Scalars['String']['input']>>;
  settingsUrl?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<SsoStatus>;
  tokenUrl?: InputMaybe<Scalars['String']['input']>;
  type: CustomSsoType;
  userProfileUrl?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateFileInput = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateFooter = {
  urls: Array<UpdateFooterUrl>;
};

export type UpdateFooterUrl = {
  title: Scalars['String']['input'];
  url: Scalars['String']['input'];
};

export type UpdateHighlightedTags = {
  highlightedTags: Array<CreateHighlightedTag>;
};

export type UpdateImageInput = {
  cropHeight?: InputMaybe<Scalars['Int']['input']>;
  cropWidth?: InputMaybe<Scalars['Int']['input']>;
  cropX?: InputMaybe<Scalars['Int']['input']>;
  cropY?: InputMaybe<Scalars['Int']['input']>;
  cropZoom?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateJwtSsoInput = {
  authorizationUrl?: InputMaybe<Scalars['String']['input']>;
  buttonText?: InputMaybe<Scalars['String']['input']>;
  logoutUrl?: InputMaybe<Scalars['String']['input']>;
  settingsUrl?: InputMaybe<Scalars['String']['input']>;
  signUpUrl?: InputMaybe<Scalars['String']['input']>;
  status: SsoStatus;
};

export type UpdateMediaNetworkSettingsInput = {
  fileSizeLimit?: InputMaybe<Scalars['Float']['input']>;
  fileTypesLimit?: InputMaybe<Array<Scalars['String']['input']>>;
  imageSizeLimit?: InputMaybe<Scalars['Float']['input']>;
  imageTypesLimit?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type UpdateMemberAttributesInput = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateMemberInput = {
  attributes?: InputMaybe<UpdateMemberAttributesInput>;
  bannerId?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  currentPassword?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  externalId?: InputMaybe<Scalars['String']['input']>;
  externalUrl?: InputMaybe<Scalars['String']['input']>;
  fields?: InputMaybe<Array<CustomFieldInput>>;
  flagged?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  newPassword?: InputMaybe<Scalars['String']['input']>;
  profilePictureId?: InputMaybe<Scalars['String']['input']>;
  roleId?: InputMaybe<Scalars['ID']['input']>;
  settings?: InputMaybe<MemberSettingsInput>;
  tagline?: InputMaybe<Scalars['String']['input']>;
  timeZone?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateMemberInvitationInput = {
  roleId: Scalars['ID']['input'];
};

export type UpdateMemberPrivateMessagingSettingsInput = {
  privateMessagingEnabled?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateModerationItemInput = {
  changeStatusReason?: InputMaybe<Scalars['String']['input']>;
  /** Operation mode when accepting a moderation report. Effects vary based on reported entity type (e.g. post removal, member suspension, etc.). */
  opMode?: InputMaybe<ModerationOpMode>;
  sendNotification?: InputMaybe<Scalars['Boolean']['input']>;
  status: ModerationStatus;
};

export type UpdateModerationSettingsInput = {
  akismet?: InputMaybe<Scalars['Boolean']['input']>;
  blackListPostTypeIds?: InputMaybe<Array<Scalars['String']['input']>>;
  blackListSpaceIds?: InputMaybe<Array<Scalars['String']['input']>>;
  customBlacklist?: InputMaybe<Array<Scalars['String']['input']>>;
  enableBlacklisting?: InputMaybe<Scalars['Boolean']['input']>;
  member?: InputMaybe<ModerationMemberSettingsInput>;
  oopSpam?: InputMaybe<Scalars['Boolean']['input']>;
  preventPublish?: InputMaybe<Scalars['Boolean']['input']>;
  useDefaultBlacklisting?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateNavigationItem = {
  link?: InputMaybe<Scalars['String']['input']>;
  openInNewWindow?: InputMaybe<Scalars['Boolean']['input']>;
  text: Scalars['String']['input'];
  type: NavigationItemType;
};

export type UpdateNetworkInput = {
  aliases?: InputMaybe<Array<Scalars['String']['input']>>;
  billingEmail?: InputMaybe<Scalars['String']['input']>;
  brandColor?: InputMaybe<Scalars['String']['input']>;
  companyName?: InputMaybe<Scalars['String']['input']>;
  customSeoDetail?: InputMaybe<CustomSeoDetailInput>;
  defaultSpaceIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  domain?: InputMaybe<Scalars['String']['input']>;
  entrancePage?: InputMaybe<Scalars['String']['input']>;
  faviconId?: InputMaybe<Scalars['String']['input']>;
  footer?: InputMaybe<UpdateFooter>;
  gclid?: InputMaybe<Scalars['String']['input']>;
  hideDefaultAuthenticationForm?: InputMaybe<Scalars['Boolean']['input']>;
  imageIds?: InputMaybe<NetworkImagesInput>;
  incidentEmails?: InputMaybe<Array<Scalars['String']['input']>>;
  industry?: InputMaybe<NetworkIndustryType>;
  landingPages?: InputMaybe<UpdateNetworkSettingsInput>;
  locale?: InputMaybe<Scalars['String']['input']>;
  logoId?: InputMaybe<Scalars['String']['input']>;
  membership?: InputMaybe<NetworkMembership>;
  name?: InputMaybe<Scalars['String']['input']>;
  navigationSlates?: InputMaybe<NavigationSlateUpdatesInput>;
  newDomain?: InputMaybe<Scalars['String']['input']>;
  passwordComplexity?: InputMaybe<NetworkPasswordComplexity>;
  primaryMembers?: InputMaybe<NetworkPrimaryMembersType>;
  privacyPolicyUrl?: InputMaybe<Scalars['String']['input']>;
  referralLink?: InputMaybe<Scalars['String']['input']>;
  referralProgramEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  referrer?: InputMaybe<Scalars['String']['input']>;
  releaseChannel?: InputMaybe<NetworkReleaseChannelType>;
  settings?: InputMaybe<NetworkSettingsInput>;
  termsOfServiceUrl?: InputMaybe<Scalars['String']['input']>;
  themes?: InputMaybe<UpdateThemes>;
  timeframe?: InputMaybe<NetworkTimeframeType>;
  topNavigation?: InputMaybe<UpdateTopNavigation>;
  tribeBranding?: InputMaybe<Scalars['Boolean']['input']>;
  utmCampaign?: InputMaybe<Scalars['String']['input']>;
  utmContent?: InputMaybe<Scalars['String']['input']>;
  utmMedium?: InputMaybe<Scalars['String']['input']>;
  utmSource?: InputMaybe<Scalars['String']['input']>;
  utmTerm?: InputMaybe<Scalars['String']['input']>;
  visibility?: InputMaybe<NetworkVisibility>;
  whoCanInviteIds?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type UpdateNetworkSettingsInput = {
  landingPageForGuest?: InputMaybe<NetworkLandingPage>;
  landingPageForMember?: InputMaybe<NetworkLandingPage>;
  landingPageForNewMember?: InputMaybe<NetworkLandingPage>;
};

export type UpdateNetworkStatusInput = {
  status: NetworkStatus;
  statusLocked?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateNewDomainInput = {
  domain: Scalars['String']['input'];
};

export type UpdateNotificationNetworkSettingsInput = {
  emailDigestEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  emailEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  emailFrom?: InputMaybe<Scalars['String']['input']>;
  emailNotificationEnabled?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdatePasswordWithTokenInput = {
  newPassword: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

export type UpdatePermissionInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  scopes?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type UpdatePostInput = {
  attachmentIds?: InputMaybe<Array<Scalars['String']['input']>>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** The custom seo detail of this post */
  customSeoDetail?: InputMaybe<CustomSeoDetailInput>;
  externalId?: InputMaybe<Scalars['String']['input']>;
  externalUrl?: InputMaybe<Scalars['String']['input']>;
  /** Whether the post is locked */
  locked?: InputMaybe<Scalars['Boolean']['input']>;
  mappingFields?: InputMaybe<Array<PostMappingFieldInput>>;
  ownerId?: InputMaybe<Scalars['ID']['input']>;
  publish?: Scalars['Boolean']['input'];
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  seoDetail?: InputMaybe<UpdatePostSeoDetailInput>;
  /** The slug of the post creating the human readable part of its URL */
  slug?: InputMaybe<Scalars['String']['input']>;
  tagNames?: InputMaybe<Array<Scalars['String']['input']>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UpdatePostSeoDetailInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdatePostTypeInput = {
  allowedReactions?: InputMaybe<Array<Scalars['String']['input']>>;
  customReactions?: InputMaybe<Array<CustomReactionInput>>;
  description?: InputMaybe<Scalars['String']['input']>;
  excludedNativeShortcuts?: InputMaybe<Array<Scalars['String']['input']>>;
  forbiddenReactions?: InputMaybe<Array<Scalars['String']['input']>>;
  iconId?: InputMaybe<Scalars['ID']['input']>;
  languageTemplate?: InputMaybe<Scalars['String']['input']>;
  layout?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  nativeFieldsTemplates?: InputMaybe<NativeFieldsTemplatesInput>;
  pluralName?: InputMaybe<Scalars['String']['input']>;
  postFields?: InputMaybe<CustomFieldsSchemaInput>;
  primaryReactionType?: InputMaybe<ReactionType>;
  recommendationsSettings?: InputMaybe<PostTypeRecommendationSettingsInput>;
  selfRepliable?: InputMaybe<Scalars['Boolean']['input']>;
  shortContentTemplate?: InputMaybe<Scalars['String']['input']>;
  singleChoiceReactions?: InputMaybe<Array<Scalars['String']['input']>>;
  slate?: InputMaybe<SlateUpdatesInput>;
  titleTemplate?: InputMaybe<Scalars['String']['input']>;
  validReplyTypesIds?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type UpdatePrivateMessagingSettingsInput = {
  membersCanTurnOffPrivateMessaging?: InputMaybe<Scalars['Boolean']['input']>;
  membersCanUsePrivateMessaging?: InputMaybe<Scalars['Boolean']['input']>;
  privateMessagingEnabled?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Input type for updating a publisher settings */
export type UpdatePublisherInput = {
  /** By enabling this, all implicit subscriptions will receive notifications from this publisher. If members subscribe/unsubscribe explicitly, they will receive/silent notifications regardless of this setting. */
  notifyImplicitSubscriptions: Scalars['Boolean']['input'];
};

export type UpdateSpaceInput = {
  address?: InputMaybe<SpaceAddressInput>;
  bannerId?: InputMaybe<Scalars['String']['input']>;
  collectionId?: InputMaybe<Scalars['ID']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  customSeoDetail?: InputMaybe<CustomSeoDetailInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  externalId?: InputMaybe<Scalars['String']['input']>;
  externalUrl?: InputMaybe<Scalars['String']['input']>;
  hidden?: InputMaybe<Scalars['Boolean']['input']>;
  imageId?: InputMaybe<Scalars['String']['input']>;
  inviteOnly?: InputMaybe<Scalars['Boolean']['input']>;
  layout?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  nonAdminsCanInvite?: InputMaybe<Scalars['Boolean']['input']>;
  private?: InputMaybe<Scalars['Boolean']['input']>;
  seoDetail?: InputMaybe<UpdateSpaceSeoDetailInput>;
  slate?: InputMaybe<SlateUpdatesInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<SpaceType>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  whoCanPost?: InputMaybe<Array<Scalars['ID']['input']>>;
  whoCanReact?: InputMaybe<Array<Scalars['ID']['input']>>;
  whoCanReply?: InputMaybe<Array<Scalars['ID']['input']>>;
  withRoles?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateSpaceMemberRoleInput = {
  roleId: Scalars['String']['input'];
};

export type UpdateSpacePostTypeInput = {
  postTypeId: Scalars['ID']['input'];
  whoCanPost?: InputMaybe<Array<Scalars['ID']['input']>>;
  whoCanReact?: InputMaybe<Array<Scalars['ID']['input']>>;
  whoCanReply?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type UpdateSpaceSeoDetailInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  imageId?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateSubscriberInput = {
  emailDigestEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  emailDigestSendFrequency?: InputMaybe<EmailDigestFrequency>;
  emailDigestWeeklySendDay?: InputMaybe<DayOfWeek>;
  /** If enabled, the subscriber will receive email notifications. */
  emailSubscriptionEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** For each FCM devices token, the subscriber will receive push notifications. */
  fcmDeviceTokens?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Array of instant email triggers that the subscriber will receive. Similar to notification triggers, these can include various events that prompt an immediate email. If this array is empty, the subscriber will not receive any instant emails. */
  instantEmailTriggers?: InputMaybe<Array<NotificationTrigger>>;
  /** If enabled, the subscriber will receive emails if they are mentioned in a post or reply. */
  mentionEmailEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** If enabled, the subscriber will receive notifications if they are mentioned in a post or reply. */
  mentionSubscriptionEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** If enabled, the subscriber will receive emails if they receive a message. */
  messageEmailEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** Array of notification triggers that the subscriber will receive. If this array is empty, the subscriber will not receive any notifications. */
  notificationTriggers?: InputMaybe<Array<NotificationTrigger>>;
  /** If enabled, the subscriber will receive emails if someone reacts to their post or reply. */
  reactionEmailEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** If enabled, the subscriber will receive notifications if someone reacts to their post or reply. */
  reactionSubscriptionEnabled?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateTagInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateTemplateInput = {
  about?: InputMaybe<Scalars['String']['input']>;
  appIds?: InputMaybe<Array<Scalars['String']['input']>>;
  authorName?: InputMaybe<Scalars['String']['input']>;
  authorUrl?: InputMaybe<Scalars['String']['input']>;
  bannerId?: InputMaybe<Scalars['String']['input']>;
  categories?: InputMaybe<Array<Scalars['String']['input']>>;
  comingSoon?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  entityProperties?: InputMaybe<Scalars['String']['input']>;
  faviconId?: InputMaybe<Scalars['String']['input']>;
  hubContentId?: InputMaybe<Scalars['String']['input']>;
  imageId?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  previewHtml?: InputMaybe<Scalars['String']['input']>;
  privacyPolicyUrl?: InputMaybe<Scalars['String']['input']>;
  requiredPlan?: InputMaybe<PlanName>;
  slate?: InputMaybe<SlateUpdatesInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  termsOfServiceUrl?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateTheme = {
  name: Scalars['String']['input'];
  status: ThemeStatus;
  tokens: UpdateThemeTokens;
};

export type UpdateThemeColor = {
  key: Scalars['String']['input'];
  weights: Array<UpdateThemeToken>;
};

export type UpdateThemeColorToken = {
  key: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type UpdateThemeColorTokens = {
  dark?: InputMaybe<Array<UpdateThemeColorToken>>;
  light?: InputMaybe<Array<UpdateThemeColorToken>>;
};

export type UpdateThemeColors = {
  dark?: InputMaybe<Array<UpdateThemeColor>>;
  light?: InputMaybe<Array<UpdateThemeColor>>;
};

export type UpdateThemeToken = {
  key: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type UpdateThemeTokens = {
  breakpoints?: InputMaybe<Array<UpdateThemeToken>>;
  colors?: InputMaybe<Array<UpdateThemeToken>>;
  fontSizes?: InputMaybe<Array<UpdateThemeToken>>;
  fontWeights?: InputMaybe<Array<UpdateThemeToken>>;
  opacity?: InputMaybe<Array<UpdateThemeToken>>;
  shadows?: InputMaybe<Array<UpdateThemeToken>>;
  sizes?: InputMaybe<Array<UpdateThemeToken>>;
  textStyles?: InputMaybe<Array<UpdateThemeToken>>;
  zIndices?: InputMaybe<Array<UpdateThemeToken>>;
};

export type UpdateThemes = {
  active: UpdateTheme;
  drafts: Array<UpdateTheme>;
  published: Array<UpdateTheme>;
};

export type UpdateTopNavigation = {
  alignment: TopNavigationAlignment;
  enabled: Scalars['Boolean']['input'];
  items: Array<UpdateNavigationItem>;
};

export type UploadedMigrations = {
  __typename?: 'UploadedMigrations';
  migrationId: Scalars['String']['output'];
  results: Array<MigrationFileResult>;
};

export type UpsertExtraPropertyInput = {
  entityId?: InputMaybe<Scalars['String']['input']>;
  entityType: ExtraPropertyEntityType;
  key: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type UpsertPageCustomResponse = {
  body?: InputMaybe<Scalars['String']['input']>;
  headers?: InputMaybe<Array<PageCustomResponseHeaderInput>>;
  httpCode: Scalars['Int']['input'];
};

export type UpsertTheme = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  colorTokens?: InputMaybe<UpdateThemeColorTokens>;
  colors?: InputMaybe<UpdateThemeColors>;
  id: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  typography?: InputMaybe<Array<UpdateThemeToken>>;
};

export type UsernameAvailability = {
  __typename?: 'UsernameAvailability';
  available: Scalars['Boolean']['output'];
};

export type ValuePermissions = {
  __typename?: 'ValuePermissions';
  isAuthorized: IsAuthorized;
  value: Scalars['String']['output'];
};

export type ValuesCountInput = {
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
};

export type Vat = {
  __typename?: 'Vat';
  text: Scalars['String']['output'];
  vatId: Scalars['String']['output'];
  vatType: VatType;
};

export type VatInput = {
  vatId: Scalars['String']['input'];
  vatType: VatType;
};

export enum VatType {
  AeTrn = 'ae_trn',
  AuAbn = 'au_abn',
  AuArn = 'au_arn',
  BrCnpj = 'br_cnpj',
  BrCpf = 'br_cpf',
  CaBn = 'ca_bn',
  CaGstHst = 'ca_gst_hst',
  CaPstBc = 'ca_pst_bc',
  CaPstMb = 'ca_pst_mb',
  CaPstSk = 'ca_pst_sk',
  CaQst = 'ca_qst',
  ChVat = 'ch_vat',
  ClTin = 'cl_tin',
  EsCif = 'es_cif',
  EuVat = 'eu_vat',
  GbVat = 'gb_vat',
  HkBr = 'hk_br',
  IdNpwp = 'id_npwp',
  IlVat = 'il_vat',
  InGst = 'in_gst',
  JpCn = 'jp_cn',
  JpRn = 'jp_rn',
  KrBrn = 'kr_brn',
  LiUid = 'li_uid',
  MxRfc = 'mx_rfc',
  MyFrp = 'my_frp',
  MyItn = 'my_itn',
  MySst = 'my_sst',
  NoVat = 'no_vat',
  NzGst = 'nz_gst',
  RuInn = 'ru_inn',
  RuKpp = 'ru_kpp',
  SaVat = 'sa_vat',
  SgGst = 'sg_gst',
  SgUen = 'sg_uen',
  ThVat = 'th_vat',
  TwVat = 'tw_vat',
  UsEin = 'us_ein',
  ZaVat = 'za_vat'
}

export type VatTypeInfo = {
  __typename?: 'VatTypeInfo';
  key: VatType;
  placeholder: Scalars['String']['output'];
  text: Scalars['String']['output'];
  value: VatType;
};

export type VerifyMemberInput = {
  memberId: Scalars['String']['input'];
  verificationCode?: InputMaybe<Scalars['String']['input']>;
};

export type SubscriptionInput = {
  id: Scalars['String']['input'];
};

export type AddReactionMutationVariables = Exact<{
  input: AddReactionInput;
  postId: Scalars['ID']['input'];
}>;


export type AddReactionMutation = { __typename?: 'Mutation', addReaction: { __typename?: 'Action', status: ActionStatus } };

export type RemoveReactionMutationVariables = Exact<{
  postId: Scalars['ID']['input'];
  reaction: Scalars['String']['input'];
}>;


export type RemoveReactionMutation = { __typename?: 'Mutation', removeReaction: { __typename?: 'Action', status: ActionStatus } };

type MediaFields_Emoji_Fragment = { __typename?: 'Emoji', text: string };

type MediaFields_File_Fragment = { __typename?: 'File', url: string };

type MediaFields_Glyph_Fragment = { __typename?: 'Glyph' };

type MediaFields_Image_Fragment = { __typename?: 'Image', url: string, height?: number | null };

export type MediaFieldsFragment = MediaFields_Emoji_Fragment | MediaFields_File_Fragment | MediaFields_Glyph_Fragment | MediaFields_Image_Fragment;

export type GetPostsQueryVariables = Exact<{
  filterBy?: InputMaybe<Array<PostListFilterByInput> | PostListFilterByInput>;
  postsLimit: Scalars['Int']['input'];
  orderByString?: InputMaybe<Scalars['String']['input']>;
  postTypeIds?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
  repliesLimit: Scalars['Int']['input'];
}>;


export type GetPostsQuery = { __typename?: 'Query', posts: { __typename?: 'PaginatedPost', nodes?: Array<{ __typename?: 'Post', id: string, title?: string | null, createdAt: any, reactionsCount: number, fields?: Array<{ __typename?: 'CustomField', key: string, value?: string | null }> | null, reactions?: Array<{ __typename?: 'PostReactionDetail', reacted: boolean }> | null, thumbnail?: { __typename?: 'Emoji', text: string } | { __typename?: 'File', url: string } | { __typename?: 'Glyph' } | { __typename?: 'Image', url: string, height?: number | null } | null, owner?: { __typename?: 'SpaceMember', member?: { __typename?: 'Member', id: string, name?: string | null, createdAt: any, profilePicture?: { __typename?: 'Emoji', text: string } | { __typename?: 'File', url: string } | { __typename?: 'Glyph' } | { __typename?: 'Image', url: string, height?: number | null } | null } | null } | null, replies?: { __typename?: 'PaginatedPost', nodes?: Array<{ __typename?: 'Post', id: string, title?: string | null, reactionsCount: number, repliesCount: number, totalRepliesCount: number, fields?: Array<{ __typename?: 'CustomField', key: string, value?: string | null }> | null, reactions?: Array<{ __typename?: 'PostReactionDetail', reacted: boolean }> | null, thumbnail?: { __typename?: 'Emoji', text: string } | { __typename?: 'File', url: string } | { __typename?: 'Glyph' } | { __typename?: 'Image', url: string, height?: number | null } | null, owner?: { __typename?: 'SpaceMember', member?: { __typename?: 'Member', id: string, name?: string | null, createdAt: any, profilePicture?: { __typename?: 'Emoji', text: string } | { __typename?: 'File', url: string } | { __typename?: 'Glyph' } | { __typename?: 'Image', url: string, height?: number | null } | null } | null } | null }> | null } | null }> | null, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean } } };

export const MediaFieldsFragmentDoc = gql`
    fragment MediaFields on Media {
  ... on File {
    url
  }
  ... on Image {
    url
    height
  }
  ... on Emoji {
    text
  }
}
    `;
export const AddReactionDocument = gql`
    mutation AddReaction($input: AddReactionInput!, $postId: ID!) {
  addReaction(input: $input, postId: $postId) {
    status
  }
}
    `;
export type AddReactionMutationFn = Apollo.MutationFunction<AddReactionMutation, AddReactionMutationVariables>;

/**
 * __useAddReactionMutation__
 *
 * To run a mutation, you first call `useAddReactionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddReactionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addReactionMutation, { data, loading, error }] = useAddReactionMutation({
 *   variables: {
 *      input: // value for 'input'
 *      postId: // value for 'postId'
 *   },
 * });
 */
export function useAddReactionMutation(baseOptions?: Apollo.MutationHookOptions<AddReactionMutation, AddReactionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddReactionMutation, AddReactionMutationVariables>(AddReactionDocument, options);
      }
export type AddReactionMutationHookResult = ReturnType<typeof useAddReactionMutation>;
export type AddReactionMutationResult = Apollo.MutationResult<AddReactionMutation>;
export type AddReactionMutationOptions = Apollo.BaseMutationOptions<AddReactionMutation, AddReactionMutationVariables>;
export const RemoveReactionDocument = gql`
    mutation RemoveReaction($postId: ID!, $reaction: String!) {
  removeReaction(postId: $postId, reaction: $reaction) {
    status
  }
}
    `;
export type RemoveReactionMutationFn = Apollo.MutationFunction<RemoveReactionMutation, RemoveReactionMutationVariables>;

/**
 * __useRemoveReactionMutation__
 *
 * To run a mutation, you first call `useRemoveReactionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveReactionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeReactionMutation, { data, loading, error }] = useRemoveReactionMutation({
 *   variables: {
 *      postId: // value for 'postId'
 *      reaction: // value for 'reaction'
 *   },
 * });
 */
export function useRemoveReactionMutation(baseOptions?: Apollo.MutationHookOptions<RemoveReactionMutation, RemoveReactionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveReactionMutation, RemoveReactionMutationVariables>(RemoveReactionDocument, options);
      }
export type RemoveReactionMutationHookResult = ReturnType<typeof useRemoveReactionMutation>;
export type RemoveReactionMutationResult = Apollo.MutationResult<RemoveReactionMutation>;
export type RemoveReactionMutationOptions = Apollo.BaseMutationOptions<RemoveReactionMutation, RemoveReactionMutationVariables>;
export const GetPostsDocument = gql`
    query GetPosts($filterBy: [PostListFilterByInput!], $postsLimit: Int!, $orderByString: String, $postTypeIds: [String!], $reverse: Boolean, $repliesLimit: Int!) {
  posts(
    filterBy: $filterBy
    limit: $postsLimit
    orderByString: $orderByString
    postTypeIds: $postTypeIds
    reverse: $reverse
  ) {
    nodes {
      id
      title
      createdAt
      fields {
        key
        value
      }
      reactionsCount
      reactions {
        reacted
      }
      thumbnail {
        ...MediaFields
      }
      owner {
        member {
          id
          name
          createdAt
          profilePicture {
            ...MediaFields
          }
        }
      }
      replies(limit: $repliesLimit) {
        nodes {
          id
          title
          fields {
            key
            value
          }
          reactionsCount
          reactions {
            reacted
          }
          repliesCount
          totalRepliesCount
          thumbnail {
            ...MediaFields
          }
          owner {
            member {
              id
              name
              createdAt
              profilePicture {
                ...MediaFields
              }
            }
          }
        }
      }
    }
    pageInfo {
      hasNextPage
    }
  }
}
    ${MediaFieldsFragmentDoc}`;

/**
 * __useGetPostsQuery__
 *
 * To run a query within a React component, call `useGetPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostsQuery({
 *   variables: {
 *      filterBy: // value for 'filterBy'
 *      postsLimit: // value for 'postsLimit'
 *      orderByString: // value for 'orderByString'
 *      postTypeIds: // value for 'postTypeIds'
 *      reverse: // value for 'reverse'
 *      repliesLimit: // value for 'repliesLimit'
 *   },
 * });
 */
export function useGetPostsQuery(baseOptions: Apollo.QueryHookOptions<GetPostsQuery, GetPostsQueryVariables> & ({ variables: GetPostsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPostsQuery, GetPostsQueryVariables>(GetPostsDocument, options);
      }
export function useGetPostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPostsQuery, GetPostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPostsQuery, GetPostsQueryVariables>(GetPostsDocument, options);
        }
export function useGetPostsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetPostsQuery, GetPostsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPostsQuery, GetPostsQueryVariables>(GetPostsDocument, options);
        }
export type GetPostsQueryHookResult = ReturnType<typeof useGetPostsQuery>;
export type GetPostsLazyQueryHookResult = ReturnType<typeof useGetPostsLazyQuery>;
export type GetPostsSuspenseQueryHookResult = ReturnType<typeof useGetPostsSuspenseQuery>;
export type GetPostsQueryResult = Apollo.QueryResult<GetPostsQuery, GetPostsQueryVariables>;