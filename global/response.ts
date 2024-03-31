export interface IBookCategories {
    status: string;
    copyright: string;
    num_results: number;
    results: ICategoryResult[];
}

export interface ICategoryResult {
    list_name: string;
    display_name: string;
    list_name_encoded: string;
    oldest_published_date: string;
    newest_published_date: string;
    updated: string;
}

export interface IBooksDetail {
    status: string;
    copyright: string;
    num_results: number;
    last_modified: string;
    results: IBookDetailResults;
}
export interface IBookDetailResults {
    list_name: string;
    list_name_encoded: string;
    bestsellers_date: string;
    published_date: string;
    published_date_description: string;
    next_published_date: string;
    previous_published_date: string;
    display_name: string;
    normal_list_ends_at: number;
    updated: string;
    books: Book[];
    corrections: any[];
}
export interface Book {
    rank: number;
    rank_last_week: number;
    weeks_on_list: number;
    asterisk: number;
    dagger: number;
    primary_isbn10: string;
    primary_isbn13: string;
    publisher: string;
    description: string;
    price: string;
    title: string;
    author: string;
    contributor: string;
    contributor_note: string;
    book_image: string;
    book_image_width: number;
    book_image_height: number;
    amazon_product_url: string;
    age_group: string;
    book_review_link: string;
    first_chapter_link: string;
    sunday_review_link: string;
    article_chapter_link: string;
    isbns: Isbn[];
    buy_links: Buylink[];
    book_uri: string;
}
interface Buylink {
    name: string;
    url: string;
}
interface Isbn {
    isbn10: string;
    isbn13: string;
}
