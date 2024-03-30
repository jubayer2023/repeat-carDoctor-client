import { useEffect, useState } from "react";
import FeatureItem from "./FeatureItem";

const CoreFeature = () => {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    fetch("corefeature.json")
      .then((res) => res.json())
      .then((data) => setFeatures(data));
  }, []);
  console.log(features);

  return (
    <div>
      <div className="text-center my-20 space-y-4">
        <h3 className="text-4xl font-bold">Why Choose Us</h3>
        <p className="text-sm text-gray-500 w-full md:w-1/2 px-4 md:px-0 mx-auto">
          The majority have suffered alteration in some form, by injected
          humour, or randomised words which do not look even slightly
          believable.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-5 px-5 md:px-0 pb-16">
        {features.map((feature) => (
          <FeatureItem key={feature.id} feature={feature}></FeatureItem>
        ))}
      </div>
    </div>
  );
};

export default CoreFeature;
