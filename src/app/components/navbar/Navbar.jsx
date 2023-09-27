"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Accordion, Button, Menu, MenuItem, TextField } from "@mui/material";
import { BsChevronDown, BsCart3, BiSearch, BsSearch } from "react-icons/bs";
import MobileDrawer from "./mobileDrawer/MoibileDrawer";
import { styled } from "@mui/material/styles";
import { useRouter } from "next/router";
import { Badge } from "@mui/material";
import { useSession, signOut } from "next-auth";
import { useFormik } from "formik";
import { selectedCountStore } from "@/app/store/productCookiesStore";
import { shallow } from "zustand/shallow";
import LoginIcon from "@mui/icons-material/Login";

export const AddToCart = () => {
  const [items, setItemFromCookie] = useState([]);

  return (
    <div className="">
      <BsCart3 className="text-xl" />
    </div>
  );
};
export const UsersInfo = () => {
  // const { data: session, status } = useSession();

  // if (status === "authenticated") {
  //   return <SignInInfo />;
  // }

  return (
    <Link href="/components/dashboard">
      <LoginIcon className="text-xl text-black" />
    </Link>
  );
};

const Navbar = () => {
  const { handleChange, handleBlur, values, handleSubmit, resetForm } =
    useFormik({
      initialValues: {
        email: "",
      },

      onSubmit: async (data) => {
        try {
          console.log(data);
          resetForm();
          const newData = {
            value: data.school_pass_year,
          };
        } catch (error) {}
      },
    });

  const StyledMenu = styled((props) => (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      {...props}
    />
  ))(({ theme }) => ({
    "& .MuiPaper-root": {
      borderRadius: 6,
      marginTop: theme.spacing(1),
      minWidth: 180,
      color:
        theme.palette.mode === "light"
          ? "rgb(55, 65, 81)"
          : theme.palette.grey[300],
      boxShadow:
        "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
      "& .MuiMenu-list": {
        padding: "4px 0",
      },
      "& .MuiMenuItem-root": {
        "& .MuiSvgIcon-root": {
          fontSize: 18,
          color: "black",
          marginRight: theme.spacing(1.5),
        },
        "&:active": {},
      },
    },
  }));

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const currentRoute = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const CustomAccordion = styled(Accordion)(({ theme }) => {
    return {
      boxShadow: "none",
      padding: 0,
      ".MuiAccordionDetails-root": {
        padding: 0,
      },
      ".MuiAccordionSummary-root": {
        padding: 0,
        gap: 0,
      },
    };
  });
  const [items, setItemFromCookie] = selectedCountStore(
    (state) => [state.items, state.setItemFromCookie],
    shallow
  );

  useEffect(() => {
    setItemFromCookie();
  }, [setItemFromCookie]);

  return (
    <nav
      className={`sticky top-0 z-10 border-b ${
        isScrolled ? "shadow-lg bg-[#4C8488] " : "bg-gray-100"
      }`}
    >
      <div className=" container mx-auto flex items-center justify-between px-2 lg:px-0 xl:px-4 py-4 ">
        <div>
          {/* <Image className='' src="/NavabrLogo.png" alt='logo' width={92} height={92}/> */}
          <p className="text-4xl font-bold ">Logo</p>
        </div>

        <div className=" block lg:hidden">
          <div className="flex gap-[10px] items-center ">
            <form className="relative" onSubmit={handleSubmit}>
              <TextField
                label="search"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                name="email"
                //   InputLabelProps={{ style: { color: 'white' } }} // Change the label color to white
                //   InputProps={{ classes: { input: 'white-input' } }} // Apply a CSS class for input styling
              />

              <button
                type="submit"
                className="absolute right-0 top-0 mt-3 mr-2 p-2 rounded-full "
              >
                <BsSearch className="text-md text-black" />
              </button>
            </form>

            <div className="">
              <AddToCart />
            </div>
            <div className="">{/* <UsersInfo /> */}</div>
          </div>
        </div>
        <div className="block lg:hidden ">
          <MobileDrawer />
        </div>

        <div className="hidden lg:block">
          <ul className="flex gap-10 items-center">
            <li className="">
              <Link
                href="/"
                className={
                  currentRoute === "/"
                    ? "font-medium text-[#FF8601]"
                    : "font-medium"
                }
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href=""
                className={
                  currentRoute === "/"
                    ? "font-medium text-[#FF8601]"
                    : "font-medium text-black"
                }
              >
                <div>
                  <Button
                    className={
                      currentRoute === "/"
                        ? "font-medium text-[#FF8601] text-lg"
                        : "font-medium text-black text-lg"
                    }
                    id="demo-customized-button"
                    aria-controls={open ? "demo-customized-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    disableElevation
                    onClick={handleClick}
                    endIcon={<BsChevronDown style={{ color: "amber" }} />}
                    color="inherit"
                    variant="text"
                    sx={{ color: "black", textTransform: "none" }}
                  >
                    More
                  </Button>
                  <StyledMenu
                    id="demo-customized-menu"
                    MenuListProps={{
                      "aria-labelledby": "demo-customized-button",
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={handleClose} disableRipple>
                      Men
                    </MenuItem>
                    <MenuItem onClick={handleClose} disableRipple>
                      Women
                    </MenuItem>

                    <MenuItem onClick={handleClose} disableRipple>
                      Kid
                    </MenuItem>
                  </StyledMenu>
                </div>
              </Link>
            </li>

            <li className="tex-white">
              <Link
                href="/"
                className={
                  currentRoute === "/"
                    ? "font-medium text-[#FF8601]"
                    : "font-medium text-black"
                }
              >
                Mobile
              </Link>
            </li>
            <li className="tex-white">
              <Link
                href="/"
                className={
                  currentRoute === "/"
                    ? "font-medium text-[#FF8601] "
                    : "font-medium text-black"
                }
              >
                About Us
              </Link>
            </li>

            <li></li>
          </ul>
        </div>

        <div className="hidden lg:block">
          <div className="flex gap-[30px] items-center ">
            <form className="relative" onSubmit={handleSubmit}>
              <TextField
                label="search"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                name="email"
                //   InputLabelProps={{ style: { color: 'white' } }} // Change the label color to white
                //   InputProps={{ classes: { input: 'white-input' } }} // Apply a CSS class for input styling
              />

              <button
                type="submit"
                className="absolute right-0 top-0 mt-3 mr-2 p-2 rounded-full "
              >
                <BsSearch className="text-md text-black" />
              </button>
            </form>

            {/* <form action="" onSubmit={handleSubmit} className='relative'>


 <TextField 
                  label="search"
                  value={values.search}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="search"
                //   InputLabelProps={{ style: { color: 'white' } }} // Change the label color to white
                //   InputProps={{ classes: { input: 'white-input' } }} // Apply a CSS class for input styling
                />
                  <button
  type="submit" 
  className="absolute right-0 top-0 mt-3 mr-2 p-2 rounded-full  transition duration-300"
//  onClick={()=>{resetForm()}}
>
  <BsSearch className='text-md'/>
</button>
               
                    </form> */}

            <div className="relative">
              <Link href="/cartpage">
                <AddToCart />
                <p className="absolute top-[-14px] left-2 font-medium text-red-700 text-xl">
                  {items.length}
                </p>
              </Link>
            </div>

            <div className="">
              <UsersInfo />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
