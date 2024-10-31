import CardPanel from "@/components/CardPanel";
import getHospitals from "@/libs/getHospitals"
import HospitalCatalog from "@/components/HospitalCatalog";
import { Suspense } from "react";
import { LinearProgress } from "@mui/material";

export default function HospitalPage(){
    const hospitals = getHospitals()
    return (
        <main>
            <h1 className="text-xl font-medium text-center">Select Your Hospital</h1>
            <Suspense fallback={<p>Loading...<LinearProgress/></p>}>
            <HospitalCatalog hospitalsJson={hospitals}></HospitalCatalog>
            </Suspense>
        </main>
    );
}