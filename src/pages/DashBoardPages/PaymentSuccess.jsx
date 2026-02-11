import React, { useEffect, useRef } from "react";
import { useSearchParams } from "react-router";
import useAxios from "../../hooks/useAxios";
import toast from "react-hot-toast";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const axios = useAxios();
  const hasVerified = useRef(false);

  useEffect(() => {
    const sessionId = searchParams.get("session_id");
    if (!sessionId || hasVerified.current) return;

    hasVerified.current = true;

    const verifyPayment = async () => {
      try {
        const response = await axios.patch(
          `/session-status?session_id=${sessionId}`,
        );
        if (response.data) {
          toast.success(
            response.data.message || "Payment verified successfully!",
          );
        }
        // console.log("Payment verified:", response.data);
      } catch (error) {
        console.error("Error verifying payment:", error);
      }
    };

    verifyPayment();
  }, [searchParams, axios]);

  return (
    <div>
      <h3>Payment Success</h3>
    </div>
  );
};

export default PaymentSuccess;

