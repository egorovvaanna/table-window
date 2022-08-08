import {  makeAutoObservable, runInAction } from "mobx";
import { Sorting, SortVariant } from "../types/types";

class tableData {
  table = [] as any[];
  searchTable = [] as any[]
  searchTableLenght: number = 0
  sorting: Sorting = {
    rating: null,
    price: null,
  };
  search : string|null = null;

  constructor() {
    makeAutoObservable(this);
  }

  async fetchTableData() {
    let url = "https://dummyjson.com/products?limit=100";
    const response = await fetch(url);
    return await response.json();
  }
  getData = async () => {
    const products = await this.fetchTableData();
    runInAction(() => {
      this.table = products.products;
      this.searchTable = products.products;
      this.searchTableLenght = products.products.length
    });
  };

  setSortingRating = (sort: SortVariant) => {
    this.sorting = {
      ...this.sorting,
      rating: this.sorting.rating === sort ? "down" : "up",
    };
    this.sorting.rating === "up" ? 
    this.searchTable.sort((a,b)=> a.rating > b.rating ? 1 : b.rating> a.rating ? -1 : 0) : 
    this.searchTable.sort((a,b)=> a.rating > b.rating ? -1 : b.rating> a.rating ? 1 : 0) 
  };

  setSortingPrice = (sort: SortVariant) => {
    this.sorting = {
      ...this.sorting,
      price: this.sorting.price === sort ? "down" : "up",
    };
    this.sorting.price === "up" ? 
    this.searchTable.sort((a,b)=> a.price > b.price ? 1 : b.price> a.price ? -1 : 0) : 
    this.searchTable.sort((a,b)=> a.price > b.price ? -1 : b.price> a.price ? 1 : 0) 
  };
  setSearch =(value:string)=>{
    this.search = value
  }

  setSearchTable =()=>{
    if(this.search !== null || this.search !== ""){
      this.searchTable = this.table.filter(el => el.title.toLowerCase().includes(this.search!.toLocaleLowerCase()))
      this.searchTableLenght = this.searchTable.length
    }
    else this.searchTable = [...this.table]
  }
}

export default new tableData();
