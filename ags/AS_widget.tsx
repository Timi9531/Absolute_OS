import app from "ags/gtk4/app";
import css from "./style.css"
import { Accessor, createBinding, createState, For, With } from "gnim"
import Gtk from "gi://Gtk?version=4.0"
import Gdk from "gi://Gdk?version=4.0"
import Pango from "gi://Pango?version=1.0"
import Astal from "gi://Astal?version=4.0"
import { FCProps } from "gnim"
import GLib from "gi://GLib?version=2.0";
import ModemManager from "gi://ModemManager?version=1.0";

function delay(time: number) {
  return new Promise(resolve => setTimeout(resolve, time));
}
/* sex */

type HoverImageProps = FCProps<
  Gtk.Image,
  {
    name?: string
    file: string
    normalSize: number
    hoverSize: number

  }
>

function HoverImage({ name, file, normalSize, hoverSize }: HoverImageProps)
{
  const [currentSize, setCurrentSize] = createState(normalSize)

  return(

      <image 
      visible
      name={name} 
      file={file}
      pixelSize={currentSize}
      marginBottom={0}
      marginStart={0}>

        <Gtk.EventControllerMotion
        onEnter={ async () => {
          let diff = 0;
          while(diff <= normalSize)
            {
            let normalSize_diff = normalSize + diff;
            await delay(1);
            setCurrentSize(normalSize_diff);
            diff++;
            
            }
          }
        }
        onLeave={ async () => {
          let diff = 0;
          while(diff <= normalSize) 
          {
            setCurrentSize(hoverSize-diff);
            await delay(1);
            diff++;
          }
        }} />

      </image> 

  )
}




function Solver(monitor = 0) {

  return (
    <window 
      visible
      name="main"
      application={app}
      layer={Astal.Layer.OVERLAY}
      exclusivity={Astal.Exclusivity.IGNORE}
      fullscreened={false}
      defaultHeight={128}
      defaultWidth={128}
      anchor={Astal.WindowAnchor.RIGHT | Astal.WindowAnchor.TOP}
      margin_top={-39}
      margin_right={-4}
      >
          <HoverImage
            name="solver"
            file="./AbsoluteSolver1.png"
            normalSize={64}
            hoverSize={128} 
            />
    </window>
  )
}

app.start({
  css: css,
  main() {
    Solver(0)
    
  },
})