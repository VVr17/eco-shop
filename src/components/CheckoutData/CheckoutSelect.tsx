// import { FC, useRef, useState } from "react";
// import { FieldValues, UseFormRegister } from "react-hook-form";
// import { ISelectList } from "types/types";
// import { SelectInput, SelectListContainer } from "./CheckoutData.styled";

// interface ICheckoutSelect {
//   name: string;
//   register: UseFormRegister<FieldValues>;
//   list: ISelectList[];
// }

// const CheckoutSelect: FC<ICheckoutSelect> = ({ register, name, list }) => {
//   const [value, setValue] = useState("s");

//   const selectRef: { current: HTMLInputElement | null } = useRef(null);
//   const { ref, ...rest } = register(name);

//   const onItemSelect = (name: string) => {
//     setValue(name);
//     selectRef.current?.focus();
//   };

//   console.log("render");
//   return (
//     <>
//       {/* <SelectInput type="text" {...register(name)} readOnly value={value} /> */}
//       <SelectInput
//         {...rest}
//         name={name}
//         type="text"
//         readOnly
//         value={value}
//         ref={(e) => {
//           ref(e);
//           selectRef.current = e; // you can still assign to ref
//         }}
//       />
//       <SelectListContainer>
//         <ul>
//           {list.map(({ name }) => (
//             <li
//               key={name}
//               onClick={() => {
//                 onItemSelect(name);
//               }}
//             >
//               {name}
//             </li>
//           ))}
//         </ul>
//       </SelectListContainer>
//     </>
//   );
// };

// export default CheckoutSelect;
