export interface AlbumModel {
    id: number,
    title: string,
    slug: string,
    cover_id: number,
    image: string,
    original: string,
    alt?: string
}

export interface AlbumPaginationModel {
    current_page?: number;
    data: AlbumModel[];
    first_page_url?: string;
    from?: number;
    last_page?: number;
    last_page_url?: string;
    next_page_url?: string;
    path?: string;
    per_page?: number;
    prev_page_url?: string;
    to?: string;
    total?: number;
}

export interface AlbumDetailModel {
    title: string;
    slug: string;
    album_detail: string;
    album_description: string;
    photos: PhotoModel[];
}

export interface PhotoModel {
    image: string;
    original: string;
    alt: string;
    created_at: Date;
    updated_at: Date;
}

export interface ClientModel {
    id: number;
    image: string;
    alt?: string;
    deleted_at?: Date;
    created_at: Date;
    updated_at: Date;
}

export interface MetaSeoModel {
    id: number;
    seo_category_id: string;
    page_title: string;
    meta_description: string;
    meta_keywords: string;
    meta_authors: string;
    og_title: string;
    og_description: string;
    og_image_url: string;
    og_url: string;
    created_at: Date;
    updated_at: Date;
}

export interface ArticleModel {
    author: string;
    title: string;
    slug: string;
    thumbnail_url: string;
    content: string;
    status: string;
    like: string;
    dislike: string;
    published_at: Date;
    deleted_at?: Date;
    created_at: Date;
    updated_at: Date;
    tags: string;
    category: string;
}

export interface ArticlePaginationModel {
    current_page?: number;
    data: ArticleModel[];
    first_page_url?: string;
    from?: number;
    last_page?: number;
    last_page_url?: string;
    next_page_url?: string;
    path?: string;
    per_page?: number;
    prev_page_url?: string;
    to?: number;
    total?: number;
}

export interface ArticleSlug {
    slug: string;
}

export interface ListTestimonyModel {
    testimonys: TestimonyModel[];
}

export interface TestimonyModel {
    content: string;
    author: string;
}

export interface FaqModel {
    title: string;
    content: string;
}

export interface WorkflowModel {
    title: string;
    content: string;
}

export interface ServiceModel {
    title: string;
    content: string;
}

export interface AboutUsModel {
    headline: string;
    title_1: string;
    content_1: string;
    title_2: string;
    content_2: string;
    title_3: string;
    content_3: string;
}

export interface MottoModel {
    headline: string;
    title: string;
    content: string;
    like: string;
}

export interface ContactModel {
    address: string;
    contact: string;
    info: string;
    location: string;
    map: string;
}

export interface EmployeeModel {
    name: string;
    job_desk: string;
    position: string;
    image: string;
    original: string;
    alt: string;
}
