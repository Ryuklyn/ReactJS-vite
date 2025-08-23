// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";

// const AddTransaction = () => {
//   const [incomeCategories, setIncomeCategories] = useState([]);
//   const [expenseCategories, setExpenseCategories] = useState([]);
//   const { id } = useParams();

//   const [formData, setFormData] = useState({
//     title: "",
//     amount: "",
//     type: "",
//     category: "",
//   });

//   const [submit, setSubmit] = useState(false);
//   const [responseData, setResponseData] = useState(null);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSubmit(true);
//     console.log("Transaction added");
//   };

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const incomeResponse = await axios.get(
//           "http://localhost:8080/api/category/getAllIncat"
//         );
//         setIncomeCategories(incomeResponse.data);
//         console.log("Income categories fetched:", incomeResponse.data);

//         const expenseResponse = await axios.get(
//           "http://localhost:8080/api/category/getAllExcat"
//         );
//         setExpenseCategories(expenseResponse.data);
//         console.log("Expense categories fetched:", expenseResponse.data);
//       } catch (error) {
//         console.error("Error fetching categories:", error);
//       }
//     };

//     fetchCategories();
//   }, []);

//   useEffect(() => {
//     if (!submit) return;

//     const createTransaction = async () => {
//       try {
//         const payload = {
//           title: formData.title,
//           amount: Number(formData.amount),
//           type: formData.type.toUpperCase(),
//           category:
//             formData.type === "income"
//               ? incomeCategories.find(
//                   (c) => c.id === Number(formData.categoryId)
//                 )?.incategory
//               : expenseCategories.find(
//                   (c) => c.id === Number(formData.categoryId)
//                 )?.excategory,
//         };

//         const response = await axios.post(
//           "http://localhost:8080/api/transaction/create",
//           payload
//         );
//         console.log("Transaction created:", response.data);
//         setResponseData(response.data);
//         navigate("/user/dashboard"); // Redirect to transaction page after successful creation
//       } catch (error) {
//         console.error("Error creating transaction:", error);
//       } finally {
//         setSubmit(false); // Reset submit state after the request is done
//       }
//     };
//     createTransaction();
//   }, [submit]);

//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         minHeight: "100vh", // center vertically
//         padding: "16px",
//         backgroundColor: "#f9fafb", // light background for contrast
//       }}
//     >
//       <div
//         style={{
//           width: "100%",
//           maxWidth: "500px", // wider card
//           backgroundColor: "white",
//           borderRadius: "12px",
//           boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
//           padding: "24px",
//         }}
//       >
//         {id && (
//           <h2
//             style={{
//               fontSize: "20px",
//               fontWeight: "600",
//               marginBottom: "16px",
//               textAlign: "center",
//               color: "#111827",
//             }}
//           >
//             Edit Transaction
//           </h2>
//         )}
//         {!id && (
//           <h2
//             style={{
//               fontSize: "20px",
//               fontWeight: "600",
//               marginBottom: "16px",
//               textAlign: "center",
//               color: "#111827",
//             }}
//           >
//             Add Transaction
//           </h2>
//         )}

//         <form
//           onSubmit={handleSubmit}
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             gap: "12px",
//           }}
//         >
//           <input
//             type="text"
//             name="title"
//             placeholder="Enter Title"
//             value={formData.title}
//             onChange={handleChange}
//             style={{
//               padding: "10px",
//               border: "1px solid #d1d5db",
//               borderRadius: "8px",
//               fontSize: "14px",
//               outline: "none",
//             }}
//           />
//           <input
//             type="number"
//             name="amount"
//             placeholder="Enter Amount"
//             value={formData.amount}
//             onChange={handleChange}
//             style={{
//               padding: "10px",
//               border: "1px solid #d1d5db",
//               borderRadius: "8px",
//               fontSize: "14px",
//               outline: "none",
//             }}
//           />
//           <select
//             name="type"
//             value={formData.type}
//             onChange={handleChange}
//             style={{
//               padding: "10px",
//               border: "1px solid #d1d5db",
//               borderRadius: "8px",
//               fontSize: "14px",
//               outline: "none",
//             }}
//           >
//             <option value="">Select Type</option>
//             <option value="income">Income</option>
//             <option value="expense">Expense</option>
//           </select>

//           {formData.type === "income" && (
//             <select
//               name="categoryId"
//               value={formData.categoryId}
//               onChange={handleChange}
//               style={{
//                 padding: "10px",
//                 border: "1px solid #d1d5db",
//                 borderRadius: "8px",
//                 fontSize: "14px",
//                 outline: "none",
//               }}
//             >
//               <option value="">Income Category</option>
//               {incomeCategories.map((category) => (
//                 <option key={category.id} value={category.id}>
//                   {category.incategory}
//                 </option>
//               ))}
//             </select>
//           )}

//           {formData.type === "expense" && (
//             <select
//               name="categoryId"
//               value={formData.categoryId}
//               onChange={handleChange}
//               style={{
//                 padding: "10px",
//                 border: "1px solid #d1d5db",
//                 borderRadius: "8px",
//                 fontSize: "14px",
//                 outline: "none",
//               }}
//             >
//               <option value="">Expense Category</option>
//               {expenseCategories.map((category) => (
//                 <option key={category.id} value={category.id}>
//                   {category.excategory}
//                 </option>
//               ))}
//             </select>
//           )}

//           <button
//             type="submit"
//             style={{
//               marginTop: "8px",
//               padding: "10px",
//               backgroundColor: "#10b981",
//               color: "white",
//               borderRadius: "8px",
//               border: "none",
//               fontSize: "15px",
//               fontWeight: "500",
//               cursor: "pointer",
//             }}
//           >
//             Add
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddTransaction;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const AddTransaction = () => {
  const [incomeCategories, setIncomeCategories] = useState([]);
  const [expenseCategories, setExpenseCategories] = useState([]);
  const { id } = useParams();

  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    type: "",
    categoryId: "",
  });

  const [submit, setSubmit] = useState(false);
  const [loading, setLoading] = useState(false);
  const [responseData, setResponseData] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(true);
    console.log(id ? "Transaction updated" : "Transaction added");
  };

  // Fetch categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const incomeResponse = await axios.get(
          "http://localhost:8080/api/category/getAllIncat"
        );
        setIncomeCategories(incomeResponse.data);
        console.log("Income categories fetched:", incomeResponse.data);

        const expenseResponse = await axios.get(
          "http://localhost:8080/api/category/getAllExcat"
        );
        setExpenseCategories(expenseResponse.data);
        console.log("Expense categories fetched:", expenseResponse.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  // Fetch transaction data for editing
  useEffect(() => {
    if (!id) return;

    const fetchTransactionData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `http://localhost:8080/api/transaction/${id}`
        );
        const transaction = response.data;
        console.log("Transaction data fetched:", transaction);

        // Find the category ID based on the category name and type
        let categoryId = "";
        if (transaction.type && transaction.type.toLowerCase() === "income") {
          const category = incomeCategories.find(
            (cat) => cat.incategory === transaction.category
          );
          categoryId = category ? category.id : "";
        } else if (
          transaction.type &&
          transaction.type.toLowerCase() === "expense"
        ) {
          const category = expenseCategories.find(
            (cat) => cat.excategory === transaction.category
          );
          categoryId = category ? category.id : "";
        }

        setFormData({
          title: transaction.title || "",
          amount: transaction.amount || "",
          type: transaction.type ? transaction.type.toLowerCase() : "",
          categoryId: categoryId.toString(),
        });
      } catch (error) {
        console.error("Error fetching transaction data:", error);
      } finally {
        setLoading(false);
      }
    };

    // Only fetch transaction data after categories are loaded
    if (incomeCategories.length > 0 && expenseCategories.length > 0) {
      fetchTransactionData();
    }
  }, [id, incomeCategories, expenseCategories]);

  // Handle form submission (create or update)
  useEffect(() => {
    if (!submit) return;

    const handleTransaction = async () => {
      try {
        setLoading(true);
        const payload = {
          title: formData.title,
          amount: Number(formData.amount),
          type: formData.type.toUpperCase(),
          category:
            formData.type === "income"
              ? incomeCategories.find(
                  (c) => c.id === Number(formData.categoryId)
                )?.incategory
              : expenseCategories.find(
                  (c) => c.id === Number(formData.categoryId)
                )?.excategory,
        };

        let response;
        if (id) {
          // Update existing transaction
          response = await axios.put(
            `http://localhost:8080/api/transaction/update/${id}`,
            payload
          );
          console.log("Transaction updated:", response.data);
        } else {
          // Create new transaction
          response = await axios.post(
            "http://localhost:8080/api/transaction/create",
            payload
          );
          console.log("Transaction created:", response.data);
        }

        setResponseData(response.data);
        navigate("/user/transaction"); // Redirect to dashboard after successful operation
      } catch (error) {
        console.error(
          `Error ${id ? "updating" : "creating"} transaction:`,
          error
        );
      } finally {
        setSubmit(false); // Reset submit state after the request is done
        setLoading(false);
      }
    };

    handleTransaction();
  }, [submit, id, formData, incomeCategories, expenseCategories, navigate]);

  if (loading && id) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <div style={{ fontSize: "18px", color: "#6b7280" }}>
          Loading transaction data...
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh", // center vertically
        padding: "16px",
        backgroundColor: "#f9fafb", // light background for contrast
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "500px", // wider card
          backgroundColor: "white",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          padding: "24px",
        }}
      >
        <h2
          style={{
            fontSize: "20px",
            fontWeight: "600",
            marginBottom: "16px",
            textAlign: "center",
            color: "#111827",
          }}
        >
          {id ? "Edit Transaction" : "Add Transaction"}
        </h2>

        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          <input
            type="text"
            name="title"
            placeholder="Enter Title"
            value={formData.title}
            onChange={handleChange}
            required
            style={{
              padding: "10px",
              border: "1px solid #d1d5db",
              borderRadius: "8px",
              fontSize: "14px",
              outline: "none",
            }}
          />
          <input
            type="number"
            name="amount"
            placeholder="Enter Amount"
            value={formData.amount}
            onChange={handleChange}
            required
            min="0"
            step="0.01"
            style={{
              padding: "10px",
              border: "1px solid #d1d5db",
              borderRadius: "8px",
              fontSize: "14px",
              outline: "none",
            }}
          />
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            required
            style={{
              padding: "10px",
              border: "1px solid #d1d5db",
              borderRadius: "8px",
              fontSize: "14px",
              outline: "none",
            }}
          >
            <option value="">Select Type</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>

          {formData.type === "income" && (
            <select
              name="categoryId"
              value={formData.categoryId}
              onChange={handleChange}
              required
              style={{
                padding: "10px",
                border: "1px solid #d1d5db",
                borderRadius: "8px",
                fontSize: "14px",
                outline: "none",
              }}
            >
              <option value="">Select Income Category</option>
              {incomeCategories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.incategory}
                </option>
              ))}
            </select>
          )}

          {formData.type === "expense" && (
            <select
              name="categoryId"
              value={formData.categoryId}
              onChange={handleChange}
              required
              style={{
                padding: "10px",
                border: "1px solid #d1d5db",
                borderRadius: "8px",
                fontSize: "14px",
                outline: "none",
              }}
            >
              <option value="">Select Expense Category</option>
              {expenseCategories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.excategory}
                </option>
              ))}
            </select>
          )}

          <button
            type="submit"
            disabled={loading}
            style={{
              marginTop: "8px",
              padding: "10px",
              backgroundColor: loading ? "#9ca3af" : "#10b981",
              color: "white",
              borderRadius: "8px",
              border: "none",
              fontSize: "15px",
              fontWeight: "500",
              cursor: loading ? "not-allowed" : "pointer",
            }}
          >
            {loading
              ? id
                ? "Updating..."
                : "Adding..."
              : id
              ? "Update Transaction"
              : "Add Transaction"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTransaction;
