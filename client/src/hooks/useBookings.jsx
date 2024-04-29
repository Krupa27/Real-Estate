import { useContext } from "react";
import UserDetailContext from "../context/UserDetailContext";
import { getAllBookings, getAllFav } from "../utils/api";
import { useQuery } from "react-query";
import { useAuth0 } from "@auth0/auth0-react";

const useBookings = () => {
  const { userDetails, setUserDetails } = useContext(UserDetailContext);
  const { user } = useAuth0();

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: "allBookings",
    queryFn: () => getAllBookings(user?.email),
    onSuccess: (data) =>
      setUserDetails((prev) => ({ ...prev, bookings: data })),
    enabled: user !== undefined,
    staleTime: 30000,
  });

  return { data, isLoading, isError, refetch };
};

export default useBookings;
