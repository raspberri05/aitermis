import time
from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler
import subprocess


class MyHandler(FileSystemEventHandler):
    def on_modified(self, event):
        if not event.is_directory and event.src_path.endswith(".py"):
            print(f"File modified: {event.src_path}")
            install_aitermis()


def install_aitermis():
    try:
        subprocess.check_call(
            ["pip", "install", "."],
            stdout=subprocess.DEVNULL,
            stderr=subprocess.DEVNULL,
        )
        print("aitermis (local) installed successfully")
    except subprocess.CalledProcessError as e:
        print(f"Failed to AITermis: {e}")


if __name__ == "__main__":
    install_aitermis()
    event_handler = MyHandler()
    observer = Observer()
    observer.schedule(event_handler, path="./aitermis", recursive=True)
    observer.start()

    try:
        while True:
            time.sleep(1)
    except KeyboardInterrupt:
        observer.stop()
    observer.join()
