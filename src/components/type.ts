import { FunctionComponent, SVGProps } from "react";

export interface NewsletterInfo {
  domain: string;
  unsubscribe_link: string;
  unsubscribe_status: number;
  restore: "pending" | "true";
  id: string;
  userEmail: string;
  readStatus: ReadStatus;
  lastReadDate?: string;
  totalEmails: number;
  emailFrequency?: number;
  readEmails: number;
}
export type ScanResultsProps = {
  data: NewsletterInfo[];
  totalNewsLettersFound: number;
  totalEmailScan: number;
  emailsDeleted?: number;
  newslettersProcessed?: number;
};
export enum UnsubscribeStatus {
  "pending" = 0,
  "failed" = 1,
  "success" = 2,
}
export type SvgIcon = FunctionComponent<
  SVGProps<SVGSVGElement> & {
    title?: string | undefined;
  }
>;
export enum ReadStatus {
  Active = 3,
  Inactive = 2,
  Neglected = 1,
  notInUse = 0,
}
