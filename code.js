figma.showUI(__html__, { width: 480, height: 160 });

figma.ui.onmessage = (msg) => {
  if (msg.type === "rename-frames") {
    const selectedFrames = figma.currentPage.selection.filter(
      (node) => node.type === "FRAME"
    );

    if (selectedFrames.length === 0) {
      figma.notify("no frames selected");
      return;
    }

    const { template } = msg;

    if (!template.includes("X")) {
      figma.notify('dolboeb tut X');
      return;
    }
      
    selectedFrames.forEach((frame, index) => {
      frame.name = template.replace("X", (index + 1).toString());
    });
    figma.closePlugin();
  }
};