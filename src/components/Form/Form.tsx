import React from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import StepIndicator from '../StepIndicator';
import CustomSelect from '../CustomSelect/CustomSelect';
import { ecommercePlatformOptions, productCategoriesOptions, storeTypeOptions } from '../../constant';
import './Form.css';

type FormValues = {
  productCategories: { label: string, value: string }[];
  storeType: { label: string, value: string }[];
  ecommercePlatform: { label: string, value: string }[];
  businessName: string;
};

const Form: React.FC = () => {
  const { register, control, handleSubmit, watch, formState: { errors, isValid } } = useForm<FormValues>({
    mode: 'onChange', defaultValues: {
      productCategories: [],
      storeType: [],
      ecommercePlatform: [],
      businessName: ''
    }
  });

  const onSubmit: SubmitHandler<FormValues> = data => {
    console.log(data);
  };
  const watchStoreType = watch('storeType');

  return (
    <div className="flex justify-center items-center">
      <div className="bg-white p-20 w-full">
        <StepIndicator />
        <h2 className="text-xl mb-4 font-light">Tell us about yourself</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-10 text-[10px]">
          <div >
            <label htmlFor="businessName" className="label">What is your Business Name?</label>
            <input type="text" {...register('businessName', {
              required: 'Please Enter Business Name', minLength: {
                value: 3,
                message: 'The business name must be longer than 3 characters',
              },
            })} className='input-item' placeholder='Your business name...' />
            {errors.businessName && <span className="error-message">{errors.businessName.message}</span>}
          </div>
          <div>
            <label htmlFor="productCategories" className="label">What do you want to sell?</label>
            <Controller
              control={control}
              name="productCategories"
              rules={{
                validate: value => value.length > 0 || 'Please Select at least 1 Category'
              }}
              render={({ field: { onChange, value } }) => (
                <CustomSelect
                  index={1}
                  onChange={(selectedOptions) => {
                    onChange(selectedOptions);
                  }}
                  value={value}
                  options={productCategoriesOptions}
                  placeholder='Watches'
                />
              )}
            />
            {errors.productCategories && <span className="error-message">{errors.productCategories.message}</span>}
          </div>

          <div>
            <label htmlFor="In what type of stores are you going to use Vaultik?" className="label">Store Type</label>
            <Controller
              control={control}
              name="storeType"
              rules={{
                validate: value => value.length > 0 || 'Please Select at least 1 store'
              }}
              render={({ field: { onChange, value } }) => (
                <CustomSelect
                  index={2}
                  onChange={(selectedOptions) => {
                    onChange(selectedOptions);
                  }}
                  value={value}
                  options={storeTypeOptions}
                />
              )}
            />
            {errors.storeType && <span className="error-message">{errors.storeType.message}</span>}
          </div>

          {watchStoreType && watchStoreType.some(o => o.value === 'ecommerce') && (
            <div>
              <label htmlFor="ecommercePlatform" className="label">eCommerce Platform</label>
              <Controller
                control={control}
                name="ecommercePlatform"
                rules={{
                  validate: value => value.length > 0 || 'Platform is required'
                }}
                render={({ field: { onChange, value } }) => (
                  <CustomSelect
                    index={3}
                    onChange={(selectedOptions) => {
                      onChange(selectedOptions);
                    }}
                    value={value}
                    options={ecommercePlatformOptions}
                  />
                )}
              />
              {errors.ecommercePlatform && <span className="error-message">{errors.ecommercePlatform.message}</span>}
            </div>
          )}
          <button
            type="submit"
            className={` submit-button ${!isValid ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={!isValid}
          >
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
