import { Button } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { useGetFacilitiesQuery } from "../../redux/api/baseApi";

const FacilityDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const {
    data: facility,
    error,
    isLoading,
  } = useGetFacilitiesQuery(id as string | undefined, {
    skip: !id,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching facility details.</p>;

  return (
    <div>
      <h2>{facility?.name}</h2>
      {facility?.image && <img src={facility.image} alt={facility.name} />}
      <p>Location: {facility?.location}</p>
      <p>Price: ${facility?.pricePerHour}</p>
      <p>Description: {facility?.description}</p>
      <Button onClick={() => navigate("/booking")}>Book Now</Button>
    </div>
  );
};

export default FacilityDetails;
