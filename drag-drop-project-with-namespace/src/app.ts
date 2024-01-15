/// <reference path="component/form.ts" />
/// <reference path="component/project-list.ts" />


namespace App{

    
    const renderForm = new RenderInputForm;
    renderForm.initialize();
    
    const renderActiveProjectlist = new RenderProjectList("active");
    renderActiveProjectlist.initialize();
    
    const renderFinishedProjectlist = new RenderProjectList("finished");
    renderFinishedProjectlist.initialize();

}




