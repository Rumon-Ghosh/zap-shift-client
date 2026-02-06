import React from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router';

const SendParcel = () => {
  const serviceCenters = useLoaderData();
  const { register, handleSubmit, reset, watch, formState: {errors} } = useForm({
    defaultValues: {
      parcelType: 'document'
    }
  });

  const regions = serviceCenters.map(c => c.region);
  const regionsArray = [...new Set(regions)]

  const getDistrict = (region) => {
    const sameRegion = regionsArray.filter((r) => r.region === region);
    const district = sameRegion.map(d => d.district);
    return district
  }

  const senderDistrict = watch("senderRegion");
  console.log(regionsArray)

  const onSubmit = (data) => {
    console.log('SendParcel form data:', data);
    reset();
  };

  return (
    <div className='w-11/12 mx-auto my-10 p-10 bg-white rounded-xl'>
      <h2 className='text-4xl font-bold text-slate-800 mb-6'>Send A Parcel</h2>
      <div className='border border-dashed border-sky-300 rounded-xl p-6'>
        <p className='text-lg font-semibold text-slate-700 mb-6'>
          Enter your parcel details
        </p>
        <form className='space-y-6' onSubmit={handleSubmit(onSubmit)}>
          {/* parcel-type type */}
          <div className='flex items-center gap-6'>
            <label className='flex items-center gap-2 text-sm text-slate-700'>
              <input
                type='radio'
                value='document'
                {...register('parcelType')}
                className='radio radio-success radio-xs'
              />
              Document
            </label>
            <label className='flex items-center gap-2 text-sm text-slate-700'>
              <input
                type='radio'
                value='not-document'
                {...register('parcelType')}
                className='radio radio-xs'
              />
              Not-Document
            </label>
          </div>

          {/* parcel info */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='space-y-2'>
              <label className='text-sm font-medium text-slate-700'>Parcel Name</label>
              <input
                type='text'
                placeholder='Parcel Name'
                {...register('parcelName', {required: "Parcel Name is required!"})}
                className='input input-bordered w-full'
              />
            {errors.parcelName && <p className='text-red-500'> {errors.parcelName.message} </p>}
            </div>
            <div className='space-y-2'>
              <label className='text-sm font-medium text-slate-700'>Parcel Weight (KG)</label>
              <input
                type='text'
                placeholder='Parcel Weight (KG)'
                {...register('parcelWeightKg')}
                className='input input-bordered w-full'
              />
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
          {/* sender info */}
            <div className='space-y-4'>
              <h3 className='text-sm font-semibold text-slate-700'>Sender Details</h3>
              <div className='space-y-2'>
                <label className='text-xs font-medium text-slate-600'>Sender Name</label>
                <input
                  type='text'
                  placeholder='Sender Name'
                  {...register('senderName', {required: "Sender Name is required!"})}
                  className='input input-bordered w-full'
                />
                {errors.senderName && <p className='text-red-500'> {errors.senderName.message} </p>}
              </div>
              <div className='space-y-2'>
                <label className='text-xs font-medium text-slate-600'>Sender Email</label>
                <input
                  type='text'
                  placeholder='Sender Email'
                  {...register('senderEmail', {required: "Sender Email is required!"})}
                  className='input input-bordered w-full'
                />
                {errors.senderEmail && <p className='text-red-500'> {errors.senderEmail.message} </p>}
              </div>
              <div className='space-y-2'>
                <label className='text-xs font-medium text-slate-600'>Address</label>
                <input
                  type='text'
                  placeholder='Address'
                  {...register('senderAddress', {required: "Sender Address is required!"})}
                  className='input input-bordered w-full'
                />
                {errors.senderAddress && <p className='text-red-500'> {errors.senderAddress.message}</p>}
              </div>
              <div className='space-y-2'>
                <label className='text-xs font-medium text-slate-600'>Sender Phone No</label>
                <input
                  type='text'
                  placeholder='Sender Phone No'
                  {...register('senderPhone', {required: "Sender Phone is required!"})}
                  className='input input-bordered w-full'
                />
                {errors.senderPhone && <p className='text-red-500'> {errors.senderPhone.message}</p>}
              </div>
              <div className='space-y-2'>
                <label className='text-xs font-medium text-slate-600'>Your Region</label>
                <select
                  className='select select-bordered w-full'
                  {...register('senderRegion', {required: "Sender Region is required!"})}
                >
                  <option value=''>Select your District</option>
                  {
                    regionsArray.map((r, i) => <option key={i} value={r}>{r}</option>)
                  }
                </select>
                {errors.senderRegion && <p className='text-red-500'> {errors.senderRegion.message}</p>}
              </div>
              <div className='space-y-2'>
                <label className='text-xs font-medium text-slate-600'>Your District</label>
                <select
                  className='select select-bordered w-full'
                  {...register('senderDistrict', {required: "Sender District is required!"})}
                >
                  <option value=''>Select your District</option>
                  {getDistrict(senderDistrict).map((d, i) => <option key={i} value={d}>{d}</option>)
                  }
                </select>
                {errors.senderDistrict && <p className='text-red-500'> {errors.senderDistrict.message}</p>}
              </div>
              <div className='space-y-2'>
                <label className='text-xs font-medium text-slate-600'>Pickup Instruction</label>
                <textarea
                  className='textarea textarea-bordered w-full min-h-25'
                  placeholder='Pickup Instruction'
                  {...register('pickupInstruction', {required: "Pickup Instruction is required!"})}
                />
              {errors.pickupInstruction && <p className='text-red-500'> {errors.pickupInstruction.message}</p>}  
              </div>
            </div>
            
            {/* receiver info */}
            <div className='space-y-4'>
              <h3 className='text-sm font-semibold text-slate-700'>Receiver Details</h3>
              <div className='space-y-2'>
                <label className='text-xs font-medium text-slate-600'>Receiver Name</label>
                <input
                  type='text'
                  placeholder='Receiver Name'
                  {...register('receiverName', {required: "Receiver Name required!"})}
                  className='input input-bordered w-full'
                />
                {errors.receiverName && <p className='text-red-500'>{errors.receiverName.message}</p>}
              </div>
              <div className='space-y-2'>
                <label className='text-xs font-medium text-slate-600'>Receiver Email</label>
                <input
                  type='text'
                  placeholder='Receiver Email'
                  {...register('receiverEmail')}
                  className='input input-bordered w-full'
                />
              </div>
              <div className='space-y-2'>
                <label className='text-xs font-medium text-slate-600'>Receiver Address</label>
                <input
                  type='text'
                  placeholder='Address'
                  {...register('receiverAddress', {required: "Receiver Address is required!"})}
                  className='input input-bordered w-full'
                />
                {errors.receiverAddress && <p className='text-red-500'>{errors.receiverAddress.message}</p>}
              </div>
              <div className='space-y-2'>
                <label className='text-xs font-medium text-slate-600'>Receiver Contact No</label>
                <input
                  type='text'
                  placeholder='Sender Contact No'
                  {...register('receiverContact', {required: "Receiver Contact is required!"})}
                  className='input input-bordered w-full'
                />
                {errors.receiverContact && <p className='text-red-500'>{errors.receiverContact.message}</p>}
              </div>
              <div className='space-y-2'>
                <label className='text-xs font-medium text-slate-600'>Receiver Region</label>
                <select
                  className='select select-bordered w-full'
                  {...register('receiverRegion', {required: "Receiver Region is required!"})}
                >
                  <option value=''>Select your District</option>
                  {
                    regionsArray.map((r, i) => <option key={i} value={r}>{r}</option>)
                  }
                </select>
                {errors.receiverRegion && <p className='text-red-500'>{errors.receiverRegion.message}</p>}
              </div>
              <div className='space-y-2'>
                <label className='text-xs font-medium text-slate-600'>Receiver District</label>
                <select
                  className='select select-bordered w-full'
                  {...register('receiverDistrict', {required: "Receiver District is required!"})}
                >
                  <option value=''>Select your District</option>
                  <option value='dhaka'>Dhaka</option>
                  <option value='chattogram'>Chattogram</option>
                  <option value='khulna'>Khulna</option>
                  <option value='rajshahi'>Rajshahi</option>
                </select>
                {errors.receiverDistrict && <p className='text-red-500'>{errors.receiverDistrict.message}</p>}
              </div>
              <div className='space-y-2'>
                <label className='text-xs font-medium text-slate-600'>Delivery Instruction</label>
                <textarea
                  className='textarea textarea-bordered w-full min-h-25'
                  placeholder='Delivery Instruction'
                  {...register('deliveryInstruction', {required: "Delivery Instruction is required!"})}
                />
                {errors.deliveryInstruction && <p className='text-red-500'>{errors.deliveryInstruction.message}</p>}
              </div>
            </div>
          </div>

          <p className='text-xs text-slate-500'>* PickUp Time 4pm-7pm Approx.</p>

          <button type='submit' className='btn bg-lime-400 hover:bg-lime-500 text-black'>
            Proceed to Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default SendParcel;
