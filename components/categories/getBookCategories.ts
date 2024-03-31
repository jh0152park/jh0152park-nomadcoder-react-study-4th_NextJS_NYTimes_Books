import { IBookCategories } from "@/global/response";

export async function getBookCategories() {
    const URL = "https://books-api.nomadcoders.workers.dev/lists";
    const response = await fetch(URL);
    const json = <IBookCategories>await response.json();
    return json;
}
