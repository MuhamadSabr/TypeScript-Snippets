import { RenderInputForm } from "./component/form.js";
import {RenderProjectList} from "./component/project-list.js";

const renderForm = new RenderInputForm;
renderForm.initialize();
    
const renderActiveProjectlist = new RenderProjectList("active");
renderActiveProjectlist.initialize();
    
const renderFinishedProjectlist = new RenderProjectList("finished");
renderFinishedProjectlist.initialize();



