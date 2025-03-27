"use client";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { DialogClose } from "@/components/ui/dialog";

export default function MotherModal() {
  const formik = useFormik({
    initialValues: {
      theme: "",
      frequency: {
        daily: false,
        weekly: false,
        monthly: false,
      },
      notification: {
        email: false,
        app: false,
        both: false,
      },
    },
    validationSchema: Yup.object({
      theme: Yup.string().required("Theme is required"),
    }),
    onSubmit: (values) => {
      console.log("Form Submitted", values);
    },
  });

  return (
      <form onSubmit={formik.handleSubmit}>
        <div className="flex justify-between mb-4">
          <h2 className="text-[24px] font-semibold text-[#28303F]">Subscribe to Daily Quotes</h2>
        </div>

        <div className="mb-4">
          <label className="text-[#28303F] font-semibold text-[16px]">Select Theme</label>
          <select
            name="theme"
            className="w-full p-3 border bg-[#D9D9D91A] border-gray-300 rounded-md mt-3 text-gray-700"
            onChange={formik.handleChange}
            value={formik.values.theme}
          >
            <option value="">Select</option>
            <option>Family Values</option>
            <option>Peace Initiatives</option>
            <option>Unification Principles</option>
            <option>Divine Femininity</option>
          </select>
          {formik.touched.theme && formik.errors.theme ? (
            <p className="text-red-500 text-sm">{formik.errors.theme}</p>
          ) : null}
        </div>

        <div className="mb-6">
          <label className="text-[#28303F] font-semibold text-[16px]">Frequency</label>
          <div className="flex flex-col mt-5 space-y-5">
            {Object.keys(formik.values.frequency).map((key, index) => (
              <label key={index} className="flex items-center gap-5">
                <Switch
                  checked={formik.values.frequency[key]}
                  onCheckedChange={() =>
                    formik.setFieldValue(`frequency.${key}`, !formik.values.frequency[key])
                  }
                />
                <span className="text-[#28303F] text-[16px] capitalize">
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </span>
              </label>
            ))}
          </div>
        </div>
        <div className="mb-6">
          <label className="text-[#28303F] font-semibold text-[16px]">Notification Type</label>
          <div className="flex flex-col mt-5 space-y-5">
            {Object.keys(formik.values.notification).map((key, index) => (
              <label key={index} className="flex items-center gap-5">
                <Switch
                  checked={formik.values.notification[key]}
                  onCheckedChange={() =>
                    formik.setFieldValue(`notification.${key}`, !formik.values.notification[key])
                  }
                />
                <span className="text-[#28303F] text-[16px] capitalize">
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </span>
              </label>
            ))}
          </div>
        </div>

        <div className="flex justify-end space-x-3">
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button type="submit" className="bg-[#5E8DE5] text-white font-medium py-2 px-4 rounded-md">
            Subscribe to Daily Quotes
          </Button>
        </div>
      </form>
    
  );
}
