"use client";

import { Button } from "@/components/ui/button";
import { getCustomSection } from "@/lib/actions/custom.action";
import { Flame, Gem, MoreVerticalIcon, Plus, PlusCircle } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import CustomForm from "../custom/CustomForm";
import CustomFieldform from "../custom/CustomFieldform";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import DeleteSection from "../delete/DeleteSection";

type CustomProps = {
  data: any;
};
const CustomDetailing = ({ data }: CustomProps) => {
  const [custom, setcustom] = useState<any>([]);

  useEffect(() => {
    const getCustomData = async () => {
      const res = await getCustomSection(data);
      if (res) {
        setcustom(res);
      }
    };
    getCustomData();
  }, []);
  return (
    <div className="min-h-screen w-full overflow-hidden">
      <div className="h-20 w-full border-b flex justify-between items-center md:px-12 px-4 ">
        <div>
          <h1 className="md:text-lg text-sm md:font-semibold font-medium text-zinc-800">
            Custom
          </h1>
          <p className="md:text-sm text-[10px] font-normal text-zinc-600">
            Please fill information below given
          </p>
        </div>

        <div className="flex">
          <Button className="flex items-center gap-2">
            <Plus size={18} />
           <div className="hidden md:block" >
           <CustomForm type="ADD" useridclerk={data} />

           </div>
          </Button>
        </div>
      </div>

      {/* CUSTOM HEADINGS SECTION */}
      <div className="w-full  flex gap-4 md:px-12 px-4 pt-4 flex-wrap ">
        {custom.map((curr: any, index: any) => {
          return (
            <div>
              {index % 2 == 0 ? (
                <div className="pb-4 w-52 bg-orange-100 rounded flex flex-col px-2 py-2">
                  <div className="flex justify-between items-center">
                    <div className="h-10 w-10 bg-white rounded-full flex justify-center items-center ">
                      <Gem
                        className="text-orange-700"
                        strokeWidth={1.5}
                        size={18}
                      />
                    </div>
                    <Popover>
                      <PopoverTrigger>
                        <MoreVerticalIcon className="text-zinc-600" size={17} />
                      </PopoverTrigger>
                      <PopoverContent>
                        <div className="h-16 border-b flex gap-2 items-center">
                          <CustomForm type="EDIT" useridclerk={data} customId={curr._id} key={curr._id} />
                        </div>
                        <div className="h-16 border-b flex gap-2 items-center">
                          <DeleteSection deleteId={curr._id} type="COMPLETE SINGLE CUSTOM" />
                        </div>
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div>
                    <h1 className="text-sm font-medium mt-4">{curr.heading}</h1>
                    <p className="text-[12px] mt-1 text-zinc-700">
                      Check All the Sections of design elements
                    </p>
                  </div>
                </div>
              ) : (
                <div className="pb-4 w-52 bg-slate-100 rounded flex flex-col px-2 py-2">
                  <div className="flex justify-between items-center">
                    <div className="h-10 w-10 bg-white rounded-full flex justify-center items-center ">
                      <Gem
                        className="text-violet-700"
                        strokeWidth={1.5}
                        size={18}
                      />
                    </div>
                    <Popover>
                      <PopoverTrigger>
                        <MoreVerticalIcon className="text-zinc-600" size={17} />
                      </PopoverTrigger>
                      <PopoverContent>
                        <div className="h-16 border-b flex gap-2 items-center">
                          <CustomForm type="EDIT" useridclerk={data} customId={curr._id} key={curr._id} />
                        </div>
                        <div className="h-16 border-b flex gap-2 items-center">
                          <DeleteSection deleteId={curr._id} type="COMPLETE SINGLE CUSTOM" />
                        </div>
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div>
                    <h1 className="text-sm font-medium mt-4">{curr.heading}</h1>
                    <p className="text-[12px] mt-1 text-zinc-700">
                      Check All the Sections of design elements
                    </p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* CUSTOM DETAILS CARD COMPONENTS */}

      <div>
        {custom.map((card: any) => {
          return (
            <div className=" border-b md:mx-12 px-4 pb-8" >
              <div className="h-20 w-full  mt-8">
                <h1 className="md:text-lg font text-sm-medium text-zinc-800">
                    {card.heading}</h1>
                <p className="md:text-sm text-[10px] font-normal text-zinc-600">
                  Explore Your All Design Section
                </p>
              </div>

              <div className="flex flex-wrap w-full  gap-4">
                {card.data.map((curr: any) => {
                  return (
                    <div className="h-[300px] w-[300px]  rounded-sm">
                      <Image
                        className="h-[250px] w-[300px] object-cover rounded-md"
                        src={curr.customImage}
                        height={900}
                        width={900}
                        alt="imageforcustom"
                      />
                      <div className="flex justify-between items-center gap-10 mt-3">
                        <h1 className=" font-medium">{curr.customTitle}</h1>
                        <Popover>
                          <PopoverTrigger>
                            <MoreVerticalIcon
                              className="text-zinc-600"
                              size={17}
                            />
                          </PopoverTrigger>
                          <PopoverContent className="w-40" >
                            <div className="h-16 flex gap-2 items-center">
                            <DeleteSection
                                deleteId={card._id}
                                additionsId={curr._id}
                                type="CUSTOM"
                              />
                            </div>
                          </PopoverContent>
                        </Popover>
                      </div>
                    </div>
                  );
                })}
                <div className="h-[250px] w-[300px]  rounded-sm border-[2px] border-zinc-300 border-dashed flex flex-col justify-center items-center md:px-12 px-4">
                  <div className="h-14 w-14 bg-violet-700 rounded-full flex justify-center items-center">
                    <CustomFieldform
                      type="ADD"
                      useridclerk={data}
                      customId={card._id}
                    />
                  </div>
                  <h1 className="mt-4 font-medium text-center">
                    {card.heading}
                  </h1>
                  <p className="text-[12px] font-normal text-zinc-600 text-center">
                    Add More {card.heading}{" "}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CustomDetailing;
