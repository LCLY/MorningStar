import { Locale } from "i18n-config";
import json from "dictionaries/en.json";

type FlattenJSON<T> = T extends object ? { [K in keyof T]: FlattenJSON<T[K]> } : string;

export type DictionaryJSONType = FlattenJSON<typeof json>;

export default async function DashboardPage({ params: { lang } }: { params: { lang: Locale } }) {
  return <div>dasdasdashboard</div>;
}
