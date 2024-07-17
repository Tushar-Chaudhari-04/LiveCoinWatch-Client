import { DataGrid, GridColDef } from "@mui/x-data-grid";

// {
//   "name": "Bitcoin",
//   "symbol": "₿",
//   "rank": 1,
//   "age": 5672,
//   "color": "#fa9e32",
//   "png32": "https://lcw.nyc3.cdn.digitaloceanspaces.com/production/currencies/32/btc.png",
//   "png64": "https://lcw.nyc3.cdn.digitaloceanspaces.com/production/currencies/64/btc.png",
//   "webp32": "https://lcw.nyc3.cdn.digitaloceanspaces.com/production/currencies/32/btc.webp",
//   "webp64": "https://lcw.nyc3.cdn.digitaloceanspaces.com/production/currencies/64/btc.webp",
//   "exchanges": 190,
//   "markets": 2812,
//   "pairs": 861,
//   "categories": [],
//   "allTimeHighUSD": 73781.24185982272,
//   "circulatingSupply": 19720343,
//   "totalSupply": 19720343,
//   "maxSupply": 21000000,
//   "links": {
//     "website": "https://bitcoin.org",
//     "whitepaper": "https://bitcoin.org/bitcoin.pdf",
//     "twitter": null,
//     "reddit": "https://reddit.com/r/bitcoin",
//     "telegram": null,
//     "discord": null,
//     "medium": null,
//     "instagram": null,
//     "tiktok": null,
//     "youtube": null,
//     "linkedin": null,
//     "twitch": null,
//     "spotify": null,
//     "naver": null,
//     "wechat": null,
//     "soundcloud": null
//   },
//   "code": "BTC",
//   "rate": 62904.754806613804,
//   "volume": 22027221826,
//   "cap": 1240503341117,
//   "delta": {
//     "hour": 1.0007,
//     "day": 1.0485,
//     "week": 1.1296,
//     "month": 0.9491,
//     "quarter": 0.9912,
//     "year": 2.0747
//   }
// },
const columns: GridColDef[] = [
  { field: "id", headerName: "", width: 40 },
  { field: "rank", headerName: "Rank", width: 40 },
  {
    field: "img",
    headerName: "Crypto",
    width: 100,
    renderCell: (params) => {
      return (
        <div>
          <img src={params?.row?.img} alt="crypto-coin" />
        </div>
      );
    },
  },
  { field: "cryptoName", headerName: "Coin", width: 100 },
  { field: "rate", headerName: "Price", width: 100 },
  { field: "cap", headerName: "Market Cap", width: 100 },
  { field: "volume", headerName: "Volume 24h", width: 100 },
  { field: "allTimeHighUSD", headerName: "All-time High", width: 100 },
  { field: "hour", headerName: "1 Hour", width: 100 },
  { field: "day", headerName: "24 h", width: 100 },
  { field: "weekly", headerName: "Weekly", width: 100 },
];

// const rows = [
//   {
//     id: 1,
//     img: "https://lcw.nyc3.cdn.digitaloceanspaces.com/production/currencies/32/btc.png",
//     name: "BTC" + "Bitcoin",
//     rate: 62904,
//     cap: 1240503341117,
//     volume: 22027221826,
//     allTimeHighUSD: 73781.24185982272,
//     hour: 1.0007,
//     h24: 1.0485,
//     weekly: 1.1296,
//   },
//   {
//     id: 2,
//     img: "https://lcw.nyc3.cdn.digitaloceanspaces.com/production/currencies/32/btc.png",
//     name: "BTC" + " Bitcoin",
//     rate: 62904,
//     cap: 1240503341117,
//     volume: 22027221826,
//     allTimeHighUSD: 73781.24185982272,
//     hour: 1.0007,
//     h24: 1.0485,
//     weekly: 1.1296,
//   },
//   {
//     id: 3,
//     img: "https://lcw.nyc3.cdn.digitaloceanspaces.com/production/currencies/32/btc.png",
//     name: "BTC" + " Bitcoin",
//     rate: 62904,
//     cap: 1240503341117,
//     volume: 22027221826,
//     allTimeHighUSD: 73781.24185982272,
//     hour: 1.0007,
//     h24: 1.0485,
//     weekly: 1.1296,
//   },
//   {
//     id: 4,
//     img: "https://lcw.nyc3.cdn.digitaloceanspaces.com/production/currencies/32/btc.png",
//     name: "BTC" + " Bitcoin",
//     rate: 62904,
//     cap: 1240503341117,
//     volume: 22027221826,
//     allTimeHighUSD: 73781.24185982272,
//     hour: 1.0007,
//     h24: 1.0485,
//     weekly: 1.1296,
//   },
//   {
//     id: 5,
//     img: "https://lcw.nyc3.cdn.digitaloceanspaces.com/production/currencies/32/btc.png",
//     name: "BTC" + " Bitcoin",
//     rate: 62904,
//     cap: 1240503341117,
//     volume: 22027221826,
//     allTimeHighUSD: 73781.24185982272,
//     hour: 1.0007,
//     h24: 1.0485,
//     weekly: 1.1296,
//   },
// ];

const DataTable = ({ cryptoSearch }) => {
  return (
    <div style={{ height: 400, width: "100%" }} className="crypto-table">
      <DataGrid
        rows={cryptoSearch}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
};

export default DataTable;
