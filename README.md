# Creek

Creek is a Livestreaming/VOD platform powered by Cloudflare [Stream](https://www.cloudflare.com/products/cloudflare-stream/), [Pages](https://pages.cloudflare.com/), and [Workers](https://workers.cloudflare.com/). It is intended for high-skill, low-budget teams who are looking for an alternative to YouTube/Vimeo/Restream/Facebook.

## Features

### MVP/1.0

- [ ] Livestreaming with Cloudflare Stream backend
- [ ] Re-broadcasting to YouTube/Vimeo/Facebook
- [ ] Stream scheduling (Pushes new stream events to YouTube/Vimeo/Facebook if in use)
- [ ] Multi-user authentication

### 2.0

- [ ] Video uploads (w/o livestream)
- [ ] "Channel" overview (With playlists and sorting)
- [ ] Stream toolkit (Utilities for integrating with [BitFocus Companion](https://bitfocus.io/companion/), OBS, etc. - Same idea as [Hologram](https://github.com/PulseDevelopmentGroup/Hologram))
- [ ] Integration with ChurchOnlinePlatform(?)

### 3.0

- [ ] Chat aggregation
- [ ] SaaS offering (Billing dashboard, managed backend, etc.)

## Development

This project is built on Next.js, designed to run on Cloudflare Pages and utilize Cloudflare Pages Functions (Beta). Getting started is fairly simple... until you go to set up Auth0.

### 0. Install Dependencies

`npm install` .........aaaaannndd that's it.

### 1. Configuring Environment

Copy contents of `.env.example` to `.env.local` and set accordingly:

| Key                                    | Value                                    | Note                                                                          |
| -------------------------------------- | ---------------------------------------- | ----------------------------------------------------------------------------- |
| `NEXT_PUBLIC_AUTH0_DOMAIN`             | `example.us.auth0.com`                   |                                                                               |
| `NEXT_PUBLIC_AUTH0_FRONTEND_CLIENT_ID` |                                          | Will define in [Frontend Settings](#frontend-settings)                        |
| `NEXT_PUBLIC_AUTH0_FRONTEND_SCOPE`     |                                          | Will define in [API Settings](#api-settings)                                  |
| `NEXT_PUBLIC_AUTH0_FRONTEND_AUDIENCE`  |                                          | Will define in [API Settings](#api-settings)                                  |
| `WORKER_AUTH0_DOMAIN`                  | `${NEXT_PUBLIC_AUTH0_DOMAIN}`            | Using a reference requires using `dotenv`, will be set manually when deployed |
| `WORKER_AUTH0_FRONTEND_AUDIENCE`       | `${NEXT_PUBLIC_AUTH0_FRONTEND_AUDIENCE}` | Using a reference requires using `dotenv`, will be set manually when deployed |
| `WORKER_AUTH0_BACKEND_ID`              |                                          | Will define in [Backend Settings](#backend-settings)                          |
| `WORKER_AUTH0_BACKEND_SECRET`          |                                          | Will define in [Backend Settings](#backend-settings)                          |

### 2. Setting up Authentication

1. Create an Auth0 Account and Tenant
2. Create a frontend (single page) application (See below for settings)
3. Create a backend (machine-to-machine) application (See below for settings)
4. Create an API (See below for settings)

#### Frontend Settings

The settings are all required. The values provided as examples for these should be changed as-needed and are for development configurations only.

##### Setup

| Property | Value   |
| -------- | ------- |
| Name     | `MyApp` |

##### Settings

| Property               | Value                                            |
| ---------------------- | ------------------------------------------------ |
| Allowed Callback URLs  | `http://localhost:3000`, `http://localhost:8788` |
| Allowed Logout URLs    | `http://localhost:3000`, `http://localhost:8788` |
| Allowed Web Origins    | `http://localhost:3000`, `http://localhost:8788` |
| Allowed Origins (CORS) | `http://localhost:3000`, `http://localhost:8788` |

##### .env.local

| Key                                    | Value                            |
| -------------------------------------- | -------------------------------- |
| `NEXT_PUBLIC_AUTH0_FRONTEND_CLIENT_ID` | Your SPA application `Client ID` |

#### Backend Settings

The settings are all required. The values provided as examples for these should be changed as-needed and are for development configurations only.

##### Setup

| Property | Value       |
| -------- | ----------- |
| Name     | `MyBackend` |

##### APIs

| Property             | Value      | Permissions                          |
| -------------------- | ---------- | ------------------------------------ |
| Auth0 Management API | Authorized | `read:users`, `read:user_idp_tokens` |

##### .env.local

| Key                           | Value                                   |
| ----------------------------- | --------------------------------------- |
| `WORKER_AUTH0_BACKEND_ID`     | Your machine-to-machine `Client ID`     |
| `WORKER_AUTH0_BACKEND_SECRET` | Your machine-to-machine `Client Secret` |

#### API Settings

##### Setup

| Property          | Value                   | Note                                                                             |
| ----------------- | ----------------------- | -------------------------------------------------------------------------------- |
| Name              | `MyAPI`                 |                                                                                  |
| Identifier        | `https://myapp.com/api` | Normally your API endpoint, does not have to be publicly available or even a URL |
| Signing Algorithm | `RS256`                 |                                                                                  |

##### Settings

| Property                                           | Value  |
| -------------------------------------------------- | ------ |
| RBAC Settings: Enable RBAC                         | `true` |
| RBAC Settings: Add Permissions in the Access Token | `true` |

##### Permissions

Add a scope(s) as needed. Requires at least one scope by default.

##### Machine to Machine Applications

Enable your backend and grant permissions as needed. `// TODO: Determine if this is necessary`

##### .env.local

| Key                                   | Value                                                   |
| ------------------------------------- | ------------------------------------------------------- |
| `NEXT_PUBLIC_AUTH0_FRONTEND_SCOPE`    | The scopes you created in [Permissions](#permissions)   |
| `NEXT_PUBLIC_AUTH0_FRONTEND_AUDIENCE` | The identifier you configured in [Setup](#api-settings) |

### 3. Running in Development Mode

Development has hot-reloading enabled. Next.js runs on port `3000` Wrangler (CF Workers) runs on port `8788`, proxying requests to Next to render the frontend.

- The full stack: `npm run dev`
- Just the frontend: `npm run frontend`
