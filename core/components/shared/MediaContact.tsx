import { EMAIL_URL, GITHUB_URL, LINKEDIN_URL } from "@/utils/vars";
import GitHub from "./Icons/GitHub";
import LinkedIn from "./Icons/LinkedIn";
import Mail from "./Icons/Mail";

const MediaContact = () => {
  return (
    <div className="fixed bottom-0 flex justify-between px-4 animate-slideInUp">
      <div className="flex flex-col items-center justify-end space-y-5 dark:text-light text-primary-dark text-opacity-80">
        <LinkedIn size="1.3em" link={LINKEDIN_URL} />
        <Mail size="1.3em" link={EMAIL_URL} />
        <GitHub size="1.3em" link={GITHUB_URL} />
        <div className="w-[1px] h-32 bg-primary dark:bg-light bg-opacity-70" />
      </div>
    </div>
  );
};

export default MediaContact;
