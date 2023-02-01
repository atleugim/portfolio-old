import { EMAIL_URL, GITHUB_URL, LINKEDIN_URL } from "@/core/utils/vars";
import GitHub from "./Icons/GitHub";
import LinkedIn from "./Icons/LinkedIn";
import Mail from "./Icons/Mail";

const MediaContact = () => {
  return (
    <div className="fixed bottom-0 flex animate-slideInUp justify-between px-4 duration-300">
      <div className="text-primary-dark flex flex-col items-center justify-end space-y-5 text-opacity-80 dark:text-light">
        <LinkedIn size="1.3em" link={LINKEDIN_URL} />
        <Mail size="1.3em" link={EMAIL_URL} />
        <GitHub size="1.3em" link={GITHUB_URL} />
        <div className="h-32 w-[1px] bg-primary bg-opacity-70 dark:bg-light" />
      </div>
    </div>
  );
};

export default MediaContact;
