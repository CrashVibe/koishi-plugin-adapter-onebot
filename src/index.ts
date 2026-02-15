import type { Internal } from "./internal";
import type { Session } from "koishi";

import { OneBot } from "./bot";

export { OneBot };

export * from "./bot";
export * from "./http";
export * from "./ws";

export default OneBot;

declare module "koishi" {
  interface Session {
    onebot?: Internal & {
      [key: string]: unknown;
    };
  }
}

declare module "koishi" {
  interface Events {
    "onebot/notice-poke"(session: Session): void;
    "onebot/notice-honor"(session: Session): void;
    "onebot/notice-title"(session: Session): void;
    "onebot/notice-lucky-king"(session: Session): void;
    "onebot/group-essence"(session: Session): void;
  }
}
