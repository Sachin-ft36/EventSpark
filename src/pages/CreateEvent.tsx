import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router-dom";
import { addEvent } from "@/services/eventService";

const CreateEvent = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    visibility: "public",
    date: "",
    time: "",
    venue: "",
    bannerImage: null as File | null,
    imageUrl: "",
  });

  const totalSteps = 4;

  const handleNext = () => {
    if (currentStep === 1 && !formData.name) {
      toast({
        title: "Event name required",
        description: "Please enter a name for your event.",
        variant: "destructive",
      });
      return;
    }

    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      // Submit form
      const dateFormatted = formData.date 
        ? new Date(formData.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
        : new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
      
      // Create a default image URL if none was uploaded
      const imageUrl = formData.imageUrl || "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80";
      
      addEvent({
        title: formData.name,
        description: formData.description,
        category: formData.category || "other",
        visibility: formData.visibility,
        date: dateFormatted,
        time: formData.time,
        location: formData.venue,
        imageUrl,
        status: "upcoming",
      });
      
      toast({
        title: "Event created!",
        description: "Your event has been successfully created.",
      });
      navigate("/timeline");
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRadioChange = (value: string) => {
    setFormData({
      ...formData,
      visibility: value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFormData({
        ...formData, 
        bannerImage: file,
        imageUrl: URL.createObjectURL(file)
      });
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6 animate-fade-in">
            <div>
              <Label htmlFor="name">Event Name</Label>
              <Input
                id="name"
                name="name"
                placeholder="Enter event name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1"
              />
            </div>
            
            <div>
              <Label htmlFor="description">Event Description</Label>
              <Textarea
                id="description"
                name="description"
                placeholder="Describe your event"
                value={formData.description}
                onChange={handleChange}
                className="mt-1"
                rows={4}
              />
            </div>
            
            <div>
              <Label htmlFor="category">Event Category</Label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-1"
              >
                <option value="">Select a category</option>
                <option value="academic">Academic</option>
                <option value="cultural">Cultural</option>
                <option value="sports">Sports</option>
                <option value="workshop">Workshop</option>
                <option value="seminar">Seminar</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div>
              <Label>Event Visibility</Label>
              <RadioGroup 
                value={formData.visibility} 
                onValueChange={handleRadioChange}
                className="mt-2 space-y-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="public" id="public" />
                  <Label htmlFor="public">Public</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="private" id="private" />
                  <Label htmlFor="private">Private</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="rsvp-only" id="rsvp-only" />
                  <Label htmlFor="rsvp-only">RSVP Only</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        );
      
      case 2:
        return (
          <div className="space-y-6 animate-fade-in">
            <div>
              <Label htmlFor="date">Event Date</Label>
              <Input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="mt-1"
              />
            </div>
            
            <div>
              <Label htmlFor="time">Event Time</Label>
              <Input
                type="time"
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="mt-1"
              />
            </div>
            
            <div>
              <Label className="block mb-4">Highlighted Dates</Label>
              <div className="bg-muted p-4 rounded-md">
                <p className="text-sm text-muted-foreground mb-2">
                  Weekend dates are highlighted for your convenience.
                </p>
                
                <div className="grid grid-cols-7 gap-1 text-center">
                  {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => {
                    const isWeekend = day % 7 === 2 || day % 7 === 3;
                    return (
                      <div
                        key={day}
                        className={`p-2 rounded-md text-sm ${
                          isWeekend 
                            ? "bg-primary-100 text-primary-700" 
                            : "bg-gray-100"
                        }`}
                      >
                        {day}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        );
      
      case 3:
        return (
          <div className="space-y-6 animate-fade-in">
            <div>
              <Label htmlFor="venue">Event Venue</Label>
              <Input
                id="venue"
                name="venue"
                placeholder="Enter venue details"
                value={formData.venue}
                onChange={handleChange}
                className="mb-4"
              />
              
              <div className="rounded-2xl overflow-hidden shadow-md h-80">
                <div className="bg-gray-200 h-full flex items-center justify-center">
                  <p className="text-gray-600">Google Maps placeholder</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Select a location on the map or enter an address above.
              </p>
            </div>
          </div>
        );
      
      case 4:
        return (
          <div className="space-y-6 animate-fade-in">
            <div>
              <Label className="block mb-2">Event Banner Image</Label>
              <div className="border-2 border-dashed border-gray-300 rounded-2xl p-6 text-center">
                {formData.imageUrl ? (
                  <div className="mb-4">
                    <img 
                      src={formData.imageUrl} 
                      alt="Event banner preview" 
                      className="max-h-48 mx-auto rounded-lg object-cover" 
                    />
                    <p className="mt-2 text-sm text-gray-600">Preview of selected image</p>
                  </div>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mx-auto h-12 w-12 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>
                )}
                
                <p className="mt-2 text-sm text-gray-600">
                  Drag and drop an image here, or click to browse
                </p>
                <p className="mt-1 text-xs text-gray-500">
                  PNG, JPG, GIF up to 10MB
                </p>
                <input
                  type="file"
                  className="hidden"
                  id="banner-image"
                  accept="image/*"
                  onChange={handleFileChange}
                />
                <Button 
                  variant="outline" 
                  className="mt-4"
                  onClick={() => document.getElementById('banner-image')?.click()}
                >
                  Select Image
                </Button>
              </div>
            </div>
            
            <div>
              <Label className="block mb-2">Review Event Details</Label>
              <div className="bg-muted p-4 rounded-md">
                <dl className="divide-y divide-gray-200">
                  <div className="flex justify-between py-2">
                    <dt className="font-medium text-gray-700">Event Name:</dt>
                    <dd className="text-gray-900">{formData.name || "Not specified"}</dd>
                  </div>
                  <div className="flex justify-between py-2">
                    <dt className="font-medium text-gray-700">Category:</dt>
                    <dd className="text-gray-900">{formData.category || "Not specified"}</dd>
                  </div>
                  <div className="flex justify-between py-2">
                    <dt className="font-medium text-gray-700">Date & Time:</dt>
                    <dd className="text-gray-900">
                      {formData.date ? `${formData.date} at ${formData.time || 'TBD'}` : "Not specified"}
                    </dd>
                  </div>
                  <div className="flex justify-between py-2">
                    <dt className="font-medium text-gray-700">Venue:</dt>
                    <dd className="text-gray-900">{formData.venue || "Not specified"}</dd>
                  </div>
                  <div className="flex justify-between py-2">
                    <dt className="font-medium text-gray-700">Visibility:</dt>
                    <dd className="text-gray-900 capitalize">{formData.visibility}</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Create New Event</h1>
        <Button variant="outline" onClick={() => navigate(-1)}>
          Cancel
        </Button>
      </div>

      {/* Stepper */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          {Array.from({ length: totalSteps }).map((_, index) => (
            <div key={index} className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  currentStep > index + 1
                    ? "bg-primary text-white"
                    : currentStep === index + 1
                    ? "bg-primary-100 text-primary-700 border-2 border-primary"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                {currentStep > index + 1 ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  index + 1
                )}
              </div>
              <span className="text-xs mt-2">
                {index === 0
                  ? "Basic Info"
                  : index === 1
                  ? "Date & Time"
                  : index === 2
                  ? "Location"
                  : "Media & Review"}
              </span>
            </div>
          ))}
        </div>
        <div className="relative mt-2">
          <div className="absolute top-0 left-0 w-full h-1 bg-gray-200"></div>
          <div
            className="absolute top-0 left-0 h-1 bg-primary transition-all duration-300"
            style={{
              width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%`
            }}
          ></div>
        </div>
      </div>

      {/* Form */}
      <div className="bg-white p-8 rounded-2xl shadow-md">
        {renderStep()}
        
        <div className="flex justify-between mt-8">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentStep === 1}
          >
            Previous
          </Button>
          <Button onClick={handleNext}>
            {currentStep === totalSteps ? "Create Event" : "Next"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreateEvent;