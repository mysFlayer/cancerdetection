import React from "react";
import { useLocation } from 'react-router-dom';
const SuccessPage = () => {
    const location = useLocation();
    const data = location.state?.data;
  if (data===0) {
    return (<div>
            <h1>Results</h1>
            <pre>THE TUMOR IS MOST PROBABLY BENIGN. So it should not be cancerous. Please recheck with a doctor for assurance</pre>
        </div>);
  }
  else if(data===1){
    return(<div>
            <h1>Results</h1>
            <pre>THE TUMOR IS MOST PROBABLY MALIGNANT. So it may be cancerous. Please recheck with a doctor for assurance</pre>
        </div>);
  }
  
};

export default SuccessPage;