declare module 'aws-amplify-react-native' {
  const Amplify: any;
  export default Amplify;

  // *** UI ***
  interface iTheme {
    container: {};
    section: {};
    sectionScroll: {};
    sectionHeader: {};
    sectionHeaderText: {};
    sectionFooter: {};
    sectionFooterLink: {};
    sectionFooterLinkDisabled: {};
    navBar: {};
    navButton: {};
    cell: {};
    errorRow: {};
    errorRowIcon: {};
    errorRowText: {};
    photo: {};
    album: {};
    button: {};
    buttonDisabled: {};
    buttonText: {};
    formField: {};
    input: {};
    inputLabel: {};
    phoneContainer: {};
    phoneInput: {};
    picker: {};
    pickerItem: {};
    signedOutMessage: {};
  }

  export const AmplifyTheme: iTheme;

  export const AmplifyMessageMapEntries: (String | RegExp)[][];

  interface iUIProps {
    theme?: iTheme;
  }

  interface iFormFieldProps extends iUIProps {
    label?: string;
    required?: boolean;
    [propName: string]: any;
  }
  export const FormField: React.FC<iFormFieldProps>;

  interface iPhoneFieldProps extends iUIProps {
    label?: string;
    required?: boolean;
    defaultDialCode?: string;
    onChangeText: (phone: string) => void;
    [propName: string]: any;
  }
  export const PhoneField: React.ComponentClass<iPhoneFieldProps>;

  // DON'T THINK THIS IS ACTUALLY USED
  export const SectionFooter: React.FC<iUIProps>;

  interface iLinkCellProps extends iUIProps {
    onPress: () => void;
  }
  export const LinkCell: React.FC<iLinkCellProps>;

  export const Header: React.FC<iUIProps>;

  export const ErrorRow: React.FC<iUIProps>;

  interface iAmplifyButtonProps extends iUIProps {
    disabled?: boolean;
    style?: any;
    text?: string;
    [propName: string]: any;
  }
  export const AmplifyButton: React.FC<iAmplifyButtonProps>;

  // *** AUTH ***
  interface iSignUpFields {
    label: string;
    key: string;
    required: boolean;
    displayOrder: number;
    type: string;
    custom?: boolean;
  }
  interface iSignUpConfig {
    header?: string;
    hiddenDefaults?: string[];
    hideAllDefaults?: boolean;
    defaultCountryCode?: string;
    signUpFields?: iSignUpFields[];
  }
  interface iAuthConfig {
    includeGreetings?: boolean;
    usernameAttributes?: string;
    authenticatorComponents?: typeof AuthPiece[];
    signUpConfig?: iSignUpConfig;
  }
  interface iWACompProps {
    authState: string;
    authData: any;
    onStateChange: (state: string, data: any) => void;
  }
  interface iWithAuthenticatorProps {
    authState?: string;
    onStateChange?: (state: string, data: any) => void;
    [propName: string]: any;
  }
  export function withAuthenticator(
    Comp: React.ComponentType<iWACompProps>,
    includeGreetings?: boolean | iAuthConfig,
    authenticatorComponents?: typeof AuthPiece[],
    federated?: any,
    theme?: iTheme,
    signUpConfig?: iSignUpConfig,
  ): React.ComponentClass<iWithAuthenticatorProps>;

  interface iAuthenticatorProps {
    authState?: string;
    authData?: any;
    onStateChange?: (state: string, data: any) => void;
    theme?: iTheme;
    errorMessage?: (message: string) => string;
    hideDefault?: boolean;
    signUpConfig?: iSignUpConfig;
    usernameAttributes?: string;
  }
  export const Authenticator: React.ComponentClass<iAuthenticatorProps>;

  interface iAuthPieceProps {
    usernameAttributes?: string;
    onStateChange?: (state: string, data: any) => void;
    errorMessage?: (message: string) => string;
    messageMap?: (message: string) => string;
    authState?: string;
    track?: () => void;
    theme?: iTheme;
    authData?: any;
  }
  export const AuthPiece: React.ComponentClass<iAuthPieceProps>;

  export const Loading: typeof AuthPiece;

  export const SignIn: typeof AuthPiece;

  export const ConfirmSignIn: typeof AuthPiece;

  interface iSignUpProps extends iAuthPieceProps {
    signUpConfig?: iSignUpConfig;
  }
  export const SignUp: React.ComponentClass<iSignUpProps>;

  export const ConfirmSignUp: typeof AuthPiece;

  export const ForgotPassword: typeof AuthPiece;

  export const RequireNewPassword: typeof AuthPiece;

  export const VerifyContact: typeof AuthPiece;

  interface iGreetingsProps extends iAuthPieceProps {
    signedInMessage?: string;
    signedOutMessage?: string;
  }
  export const Greetings: React.ComponentClass<iGreetingsProps>;

  interface iWithOAuthProps {
    oauth_config?: any;
    [propName: string]: any;
  }
  interface iWOACompProps {
    loading: boolean;
    oAuthUser: any;
    oAuthError: any;
    hostedUISignIn: () => void;
    facebookSignIn: () => void;
    amazonSignIn: () => void;
    googleSignIn: () => void;
    customProviderSignIn: (provider: string) => void;
    signOut: () => void;
  }
  export function withOAuth(
    Comp: React.ComponentType<iWOACompProps>,
  ): React.ComponentClass<iWithOAuthProps>;

  // *** API ***
  interface iGraphQLOperation {
    query: any;
    variables: {};
  }
  interface iConnectProps {
    query?: iGraphQLOperation;
    mutation?: iGraphQLOperation;
    subscription?: iGraphQLOperation;
    onSubscriptionMsg?: (prevData: any, data: any) => any;
  }
  export const Connect: React.ComponentClass<iConnectProps>;

  // *** STORAGE ***
  interface iS3ImageProps extends iUIProps {
    imgKey?: string;
    level?: string;
    body?: any;
    contentType?: string;
    style?: string;
    resizeMode?: string;
  }
  export const S3Image: React.ComponentClass<iS3ImageProps>;

  interface iS3AlbumProps extends iUIProps {
    path?: string;
    level?: string;
    filter?: (data: any) => boolean;
    [propName: string]: any;
  }
  export const S3Album: React.ComponentClass<iS3AlbumProps>;

  // *** INTERACTIONS ***
  export const ChatBot: React.ComponentClass<any>;
}
