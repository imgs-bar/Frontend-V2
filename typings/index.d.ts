export interface User {
  //The user's UUID
  _id: string;

  //The users UID
  uid: number;

  //The user's email
  email: string;

  //The user's username (changeable)
  username: string;

  //The users password (hashed in argon2)
  password: string;

  //The amount of ungenerated invites the user has left.
  invites: number;

  //The user's upload key
  key: string;

  //The amount of uploads the user has
  uploads: number;

  //The amount of people this user has invited
  invited: number;

  //The user's banned status.
  banned: {
    //If they're banned
    status: boolean;

    //The reason they are banned
    reason?: string | null;
  };

  //The user's roles
  roles: {
    premium: {
      //If the user currently has premium.
      status: boolean;

      //The unix timestamp when premium expires. -1 if it doesnt
      endsAt: number;
    };
    //If the user should have unlimited invites, and access to the admin dashboard.
    admin: boolean;

    //If the user should have access to the mod dashboard
    mod: boolean;
  };

  // The user's settings
  settings: {
    //If the user's upload URLS should be longer.
    longUrl: boolean;

    //If the user's upload URLS should consist of emojis
    emojiUrl: boolean;

    //If the user's upload URLS should show the file extension
    showExtension: boolean;

    //The user's embed settings
    embeds: {
      //If the user has discord embeds enabled
      enabled: boolean;

      //The list of embed "profiles"
      list: {
        //The embed's ID
        _id: string;

        //The name of the embed profile
        name: string;

        //The embed "site url" also known as provider
        header: {
          text: string;
          url: string;
        };

        //The embed author.
        author: {
          text: string;
          url: string;
        };

        //The embed title
        title: string;

        //The embed description
        description: string;

        //Embed color, set it to "random" for random
        color: string;
      }[];
    };

    //The user's domains
    domains: {
      //The domain's domain, i.e imgs.bar
      name: string;

      //The domains subdomain, i.e beta. Not in use with fake url
      subDomain: string;

      //The embed author.
      fake: boolean;

      //The domain's embed _id.
      embed: string;

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
}
export type setting = 'longUrl' | 'emojiUrl' | 'showExtension';
