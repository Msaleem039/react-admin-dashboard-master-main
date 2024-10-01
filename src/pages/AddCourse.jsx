import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const AddCourse = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    // Create a FormData object
    const formData = new FormData();

    // Append all form fields to formData
    formData.append('courseName', data.courseName);
    formData.append('urlSlug', data.urlSlug);
    formData.append('featured', data.featured);
    formData.append('courseImage', data.courseImage[0]); // File input as an array, so take the first file
    formData.append('videoID', data.videoID);
    formData.append('courseCategory', data.courseCategory);
    formData.append('skillLevel', data.skillLevel);
    formData.append('shortDescription', data.shortDescription);
    formData.append('courseDescription', data.courseDescription);
    formData.append('instructor', data.instructor);
    formData.append('monthlyFee', data.monthlyFee);
    formData.append('admissionFee', data.admissionFee);
    formData.append('durationMonths', data.durationMonths);
    formData.append('durationDays', data.durationDays || 0); // Optional field
    formData.append('metaTitle', data.metaTitle || '');
    formData.append('metaDescription', data.metaDescription || '');
    formData.append('brochure', data.brochure[0]); // File input as an array, so take the first file
    formData.append('status', data.status);
    formData.append('isViewOnWeb', data.isViewOnWeb);
    formData.append('inSitemap', data.inSitemap);
    formData.append('pageIndex', data.pageIndex);
    formData.append('canonicalUrl', data.canonicalUrl || '');

    try {
      // Make the POST request with axios
      const res = await axios.post(
        'http://localhost:8000/api/categories/create',
        formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      if (res.status === 200) {
        console.log('Course added successfully', res.data);
        navigate("/courses");
      } else {
        console.error('Error adding course', res.data);
      }
    } catch (error) {
      console.error('Error during course submission', error);
    }
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
            {...register("slug", { required: true })}
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

        {/* Additional fields */}
        {/* ... (Other input fields, similar to the ones above, for the remaining fields in the form) */}

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

export default AddCourse;
