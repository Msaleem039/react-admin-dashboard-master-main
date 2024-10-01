import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const AddBlog = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const onSubmit = async(data) => {
   let res = await axios.post('https://88b8-182-181-220-26.ngrok-free.app/api/categories',data)
    if (res.status === 200) {
      console.log('Category added successfully', res.data);
      navigate("/courses");
    } else {
      console.error('Error adding category', res.data);
    }
    // Handle form submission logic here
 // Redirect after successful form submission
  };
  return (
    <div className='p-6 bg-gray-800 rounded-lg shadow-md max-w-lg mx-auto'>
      <h2 className='text-3xl font-semibold text-gray-100 mb-6 text-center'>
        Add Course
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

        {/* Course Name */}
        <div className='mb-4'>
          <label className='block text-gray-400 mb-2'>Course Name</label>
          <input
            type='text'
            {...register("courseName", { required: true })}
            className='w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            placeholder="Enter course name"
          />
          {errors.courseName && <span className="text-red-500">Course Name is required</span>}
        </div>

        {/* URL Slug */}
        <div className='mb-4'>
          <label className='block text-gray-400 mb-2'>URL Slug</label>
          <input
            type='text'
            {...register("urlSlug", { required: true })}
            className='w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            placeholder="Enter URL slug"
          />
          {errors.urlSlug && <span className="text-red-500">URL Slug is required</span>}
        </div>

        {/* Featured Option */}
        <div className='mb-4'>
          <label className='block text-gray-400 mb-2'>Featured</label>
          <select
            {...register("featured", { required: true })}
            className='w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          {errors.featured && <span className="text-red-500">Featured option is required</span>}
        </div>

        {/* Course Image */}
        <div className='mb-4'>
          <label className='block text-gray-400 mb-2'>Course Image</label>
          <input
            type='file'
            {...register("courseImage", { required: true })}
            className='w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            accept="image/*"
          />
          {errors.courseImage && <span className="text-red-500">Course Image is required</span>}
        </div>

        {/* Video ID */}
        <div className='mb-4'>
          <label className='block text-gray-400 mb-2'>Video ID</label>
          <input
            type='text'
            {...register("videoID", { required: true })}
            className='w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            placeholder="Enter video ID"
          />
          {errors.videoID && <span className="text-red-500">Video ID is required</span>}
        </div>

        {/* Course Category */}
        <div className='mb-4'>
          <label className='block text-gray-400 mb-2'>Course Category</label>
          <select
            {...register("courseCategory", { required: true })}
            className='w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
          >
            <option value="">Select Category</option>
            <option value="Development">Development</option>
            <option value="Design">Design</option>
            <option value="Marketing">Marketing</option>
          </select>
          {errors.courseCategory && <span className="text-red-500">Course Category is required</span>}
        </div>

        {/* Skill Level */}
        <div className='mb-4'>
          <label className='block text-gray-400 mb-2'>Skill Level</label>
          <select
            {...register("skillLevel", { required: true })}
            className='w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
          >
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
            <option value="Appropriate for All">Appropriate for All</option>
          </select>
          {errors.skillLevel && <span className="text-red-500">Skill Level is required</span>}
        </div>

        {/* Short Description */}
        <div className='mb-4'>
          <label className='block text-gray-400 mb-2'>Short Description</label>
          <textarea
            {...register("shortDescription", { required: true })}
            className='w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            placeholder="Enter short description"
          />
          {errors.shortDescription && <span className="text-red-500">Short Description is required</span>}
        </div>

        {/* Course Description */}
        <div className='mb-4'>
          <label className='block text-gray-400 mb-2'>Course Description</label>
          <textarea
            {...register("courseDescription", { required: true })}
            className='w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            placeholder="Enter course description"
          />
          {errors.courseDescription && <span className="text-red-500">Course Description is required</span>}
        </div>

        {/* Instructor */}
        <div className='mb-4'>
          <label className='block text-gray-400 mb-2'>Instructor</label>
          <input
            type='text'
            {...register("instructor", { required: true })}
            className='w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            placeholder="Enter instructor's name"
          />
          {errors.instructor && <span className="text-red-500">Instructor is required</span>}
        </div>

        {/* Monthly Fee */}
        <div className='mb-4'>
          <label className='block text-gray-400 mb-2'>Monthly Fee</label>
          <input
            type='number'
            {...register("monthlyFee", { required: true })}
            className='w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            placeholder="Enter monthly fee (from LMS API)"
          />
          {errors.monthlyFee && <span className="text-red-500">Monthly Fee is required</span>}
        </div>

        {/* Admission Fee */}
        <div className='mb-4'>
          <label className='block text-gray-400 mb-2'>Admission Fee</label>
          <input
            type='number'
            {...register("admissionFee", { required: true })}
            className='w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            placeholder="Enter admission fee (from LMS API)"
          />
          {errors.admissionFee && <span className="text-red-500">Admission Fee is required</span>}
        </div>

        {/* Duration (Months) */}
        <div className='mb-4'>
          <label className='block text-gray-400 mb-2'>Duration (Months)</label>
          <input
            type='number'
            {...register("durationMonths", { required: true })}
            className='w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            placeholder="Enter duration in months"
          />
          {errors.durationMonths && <span className="text-red-500">Duration in months is required</span>}
        </div>

        {/* Duration (Days) */}
        <div className='mb-4'>
          <label className='block text-gray-400 mb-2'>Duration (Days)</label>
          <input
            type='number'
            {...register("durationDays")}
            className='w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            placeholder="Enter duration in days"
          />
        </div>

        {/* Meta Title */}
        <div className='mb-4'>
          <label className='block text-gray-400 mb-2'>Meta Title</label>
          <input
            type='text'
            {...register("metaTitle")}
            className='w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            placeholder="Enter meta title"
          />
        </div>

        {/* Meta Description */}
        <div className='mb-4'>
          <label className='block text-gray-400 mb-2'>Meta Description</label>
          <textarea
            {...register("metaDescription")}
            className='w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            placeholder="Enter meta description"
          />
        </div>

        {/* Brochure */}
        <div className='mb-4'>
          <label className='block text-gray-400 mb-2'>Brochure</label>
          <input
            type='file'
            {...register("brochure")}
            className='w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            accept="application/pdf"
          />
        </div>

        {/* Status */}
        <div className='mb-4'>
          <label className='block text-gray-400 mb-2'>Status</label>
          <select
            {...register("status", { required: true })}
            className='w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        {/* Is View on Web */}
        <div className='mb-4'>
          <label className='block text-gray-400 mb-2'>Is View on Web</label>
          <select
            {...register("isViewOnWeb", { required: true })}
            className='w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        {/* In Sitemap */}
        <div className='mb-4'>
          <label className='block text-gray-400 mb-2'>In Sitemap</label>
          <select
            {...register("inSitemap", { required: true })}
            className='w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        {/* Page Index */}
        <div className='mb-4'>
          <label className='block text-gray-400 mb-2'>Page Index</label>
          <select
            {...register("pageIndex", { required: true })}
            className='w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        {/* Custom Canonical URL */}
        <div className='mb-4'>
          <label className='block text-gray-400 mb-2'>Custom Canonical URL</label>
          <input
            type='url'
            {...register("canonicalUrl")}
            className='w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            placeholder="Enter custom canonical URL"
          />
        </div>

        {/* Submit Button */}
        <button
          type='submit'
          className='w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 focus:outline-none'
        >
          Add Course
        </button>
      </form>
    </div>
  );
};

export default AddBlog;
