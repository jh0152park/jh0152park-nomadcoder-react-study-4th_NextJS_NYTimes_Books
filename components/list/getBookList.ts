import { IBooksDetail } from "@/global/response";

export async function getBookList(category: string) {
    const URL = ` https://books-api.nomadcoders.workers.dev/list?name=${category}`;
    const response = await fetch(URL);
    const json = <IBooksDetail>await response.json();
    return json;
}
