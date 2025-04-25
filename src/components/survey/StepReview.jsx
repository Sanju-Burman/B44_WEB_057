import { useSurvey } from "../../context/SurveyContext";
import axios from "axios";
import { toast } from "react-toastify";

const StepReview = () => {
    const { formData } = useSurvey();

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        try {
            const response = await axios.post("http://localhost:5000/api/survey", formData);
            if (response.status === 201) {
                toast.success("Survey submitted successfully!");
            } else {
                toast.error("Unexpected response. Please try again.");
            }
        } catch (err) {
            toast.error("Submission failed. Please try again later.");
            console.error("Error submitting survey:", err);
        }
    };

    return (
        <div className="max-w-xl mx-auto fItem">
            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-8 p-6">
                <h2 className="text-2xl font-bold mb-4">Review Your Preferences</h2>

                <div className="space-y-3 mb-6">
                    <div>
                        <strong>Travel Style:</strong> {formData.travelStyle || "Not selected"}
                    </div>
                    <div>
                        <strong>Budget:</strong> {formData.budget ? `$${formData.budget}` : "Not specified"}
                    </div>
                    <div>
                        <strong>Interests:</strong> {formData.interests?.length > 0 ? formData.interests.join(", ") : "None"}
                    </div>
                    <div>
                        <strong>Activities:</strong> {formData.activities?.length > 0 ? formData.activities.join(", ") : "None"}
                    </div>
                </div>

                <div className="flex gap-4 justify-between">
                    <button
                        type="submit"
                        className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default StepReview;