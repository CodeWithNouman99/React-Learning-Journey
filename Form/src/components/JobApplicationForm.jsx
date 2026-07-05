import React from "react";
import { useForm } from "react-hook-form";

function JobApplicationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert("Application submitted successfully!");
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="job-form">
      <label>
        Full Name:
        <input
          type="text"
          {...register("fullName", { required: "Full name is required" })}
          placeholder="John Doe"
        />
        {errors.fullName && <span>{errors.fullName.message}</span>}
      </label>

      <label>
        Email:
        <input
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email format",
            },
          })}
          placeholder="example@email.com"
        />
        {errors.email && <span>{errors.email.message}</span>}
      </label>

      <label>
        Phone:
        <input
          type="tel"
          {...register("phone", {
            required: "Phone number is required",
            pattern: {
              value: /^[0-9]{10}$/,
              message: "Enter a valid 10-digit number",
            },
          })}
          placeholder="9876543210"
        />
        {errors.phone && <span>{errors.phone.message}</span>}
      </label>

      <label>
        Position Applying For:
        <select {...register("position", { required: true })}>
          <option value="">Select Position</option>
          <option value="Frontend Developer">Frontend Developer</option>
          <option value="Backend Developer">Backend Developer</option>
          <option value="Full Stack Developer">Full Stack Developer</option>
          <option value="UI/UX Designer">UI/UX Designer</option>
        </select>
        {errors.position && <span>Please select a position</span>}
      </label>

      <label>
        Resume:
        <input
          type="file"
          {...register("resume", { required: "Resume is required" })}
        />
        {errors.resume && <span>{errors.resume.message}</span>}
      </label>

      <label>
        Cover Letter:
        <textarea
          {...register("coverLetter", {
            required: "Cover letter is required",
            minLength: {
              value: 50,
              message: "Cover letter must be at least 50 characters",
            },
          })}
          placeholder="Write a brief cover letter..."
        ></textarea>
        {errors.coverLetter && <span>{errors.coverLetter.message}</span>}
      </label>

      <button type="submit">Submit Application</button>
    </form>
  );
}

export default JobApplicationForm;