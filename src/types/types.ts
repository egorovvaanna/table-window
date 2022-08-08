
export type SortVariant = null | "up" | "down"

export type Sorting ={ rating:  SortVariant,
price: SortVariant}

export interface AirlinesTypes{
    name?: string,
    country?:string,
    logo?: string,
    website?: string,
    slogan? :string,
    established?: string
}