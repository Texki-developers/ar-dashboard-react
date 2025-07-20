export interface IHeaderConfig {
    title: string;
    onSearch?: (searchValue: string) => void;
    total?: number;
}