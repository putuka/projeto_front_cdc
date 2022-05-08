import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import Conta from "./pages/Conta/Conta";
import Login from "./pages/Login";
import Main from "./pages/Main";


const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="main" element={<Main />}>
          <Route path="conta" element={<Conta />} />
          <Route path="login" element={<Login />} />
          
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);

function Home (){
    return(
        <div>
            <h1>Home</h1>
            <nav>
                <Link to = "/" >Home</Link> | {" "}
                <Link to = "about">about</Link>
            </nav>
        </div>
    );
};

function Invoices() {
    let navigate = useNavigate();
    return (
      <div>
        <NewInvoiceForm
          onSubmit={async (event) => {
            let newInvoice = await createInvoice(
              event.target
            );
            navigate(`/invoices/${newInvoice.id}`);
          }}
        />
      </div>
    );
  };


  function Invoice() {
    let { invoiceId } = useParams();
    let invoice = useFakeFetch(`/api/invoices/${invoiceId}`);
    return invoice ? (
      <div>
        <h1>{invoice.customerName}</h1>
      </div>
    ) : (
      <Loading />
    );
  };
  