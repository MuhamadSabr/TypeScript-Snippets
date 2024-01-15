export class Component {
    constructor(templateElementId, hostingElementId, insertPosition, targetElementId) {
        this.templateElement = document.getElementById(templateElementId);
        this.hostingElement = document.getElementById(hostingElementId);
        let clone = document.importNode(this.templateElement.content, true);
        this.targetElement = clone.firstElementChild;
        if (targetElementId)
            this.targetElement.id = targetElementId;
        this.hostingElement.insertAdjacentElement(insertPosition, this.targetElement);
    }
}
