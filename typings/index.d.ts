export interface User {
  /**
   * The users UUID
   */
  _id: string;

  /**
   * The users UID
   */
  uid: number;

  /**
   * The users original uid
   */
  originalUid: number;

  /**
   * The users email address
   */
  email: string;

  /**
   * The users username
   */
  username: string;

  /**
   * The users password (hashed)
   */
  password: string;

  /**
   * The amount of ungenerated invites the user has left.
   */
  invites: number;

  /**
   * The users upload key
   */
  key: string;

  /**
   * The users amount of uploads
   */
  uploads: number;

  /**
   * The users amount of invited people
   */
  invited: number;

  /**
   * The users register date
   */
  registerDate: Date;

  /**
   * The users banned status
   */
  banned: {
    /**
     * If they're banned
     */
    status: boolean;

    /**
     * The users reason for being banned
     */
    reason?: string | null;
  };

  /**
   * The users cooldowns
   */
  cooldowns: {
    /**
     * The users last uid change
     */
    lastUidChange: Date;
  };

  /**
   * The users roles
   */
  roles: {
    premium: {
      /**
       * Current premium status
       */
      status: boolean;

      /**
       * When should premium expire
       */
      endsAt: number;
    };
    /**
     * If the user has admin access
     */
    admin: boolean;

    /**
     * If the user has moderator access
     */
    mod: boolean;
  };

  /**
   * The users discord stuff
   */
  discord: {
    /**
     * If the discord is currently linked
     */
    linked: boolean;

    /**
     * The users discord id
     */
    id?: string;

    /**
     * The users discord discriminator / tag
     */
    discriminator?: string;

    /**
     * The users refresh token
     */
    refreshToken?: string;
    /**
     * The users discord avatar url
     */
    avatar?: string;
  };

  /**
   * The users badges
   */
  badges: {
    verified: boolean;
    earlySupporter: boolean;
  };

  /**
   * If the users profile is private
   */
  private: boolean;

  /**
   * The users settings
   */
  settings: {
    //Length of users uploads
    urlLength: number;

    //The type of url the user has set
    urlType: 'normal' | 'emoji' | 'invisible';

    //If the user's upload URLS should show the file extension
    showExtension: boolean;

    //The user's embed settings
    embeds: {
      //If the user has discord embeds enabled
      enabled: boolean;

      //The list of embed "profiles"
      list: EmbedInterface[];
    };

    //The user's domains
    domains: {
      //The domain's domain, i.e imgs.bar
      name: string;

      //The domains subdomain, i.e beta. Not in use with fake url
      subDomain: string;

      //The embed author.
      fake: boolean;

      //The domain's embed's _id.
      embeds: string[];

      //What should be added to the filename, also supports directories
      fileNamePrefix: string;
    }[];
  };
}

export interface IUserContext {
  user: User;

  setUser(user: User): void;
}

export interface Stats {
  users: number;
  files: number;
  domains: number;
}
export type booleanSetting = 'showExtension' | 'embed';

export interface Domain {
  _id: string;
  domain: string;
}

export type urlType = 'normal' | 'emoji' | 'invisible';
