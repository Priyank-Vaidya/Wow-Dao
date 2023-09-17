import os

import tensorflow as tf
from flask import Flask, render_template, request, jsonify
import model_functions
from azure.storage.blob import BlobServiceClient
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


CORS(app, resources={r"/api/*": {"origins":"http:localhost:3000"}})

# app.config['UPLOAD_FOLDER'] = 'static/uploads'
# app.config['RESULT_FOLDER'] = 'static/results'
# app.config['ALLOWED_EXTENSIONS'] = {'png', 'jpg', 'jpeg'}

# # Load the Pix2Pix model
# # pix2pix_model = Pix2PixModel('pix2pix_og.ipynb')
# model="pix2pix_og.ipynb"

# def allowed_file(filename):
#     return '.' in filename and filename.rsplit('.', 1)[1].lower() in app.config['ALLOWED_EXTENSIONS']


connect_str = os.getenv('AZURE_STORAGE_CONNECTION_STRING') # retrieve the connection string from the environment variable
container_name = "photos" # container name in which images will be store in the storage account

blob_service_client = BlobServiceClient.from_connection_string(conn_str=connect_str) # create a blob service client to interact with the storage account
try:
    container_client = blob_service_client.get_container_client(container=container_name) # get container client to interact with the container in which images will be stored
    container_client.get_container_properties() # get properties of the container to force exception to be thrown if container does not exist
except Exception as e:
    print(e)
    print("Creating container...")
    container_client = blob_service_client.create_container(container_name) # create a container in the storage account if it does not exist



@app.route('/', methods=['GET'])
def func():
    return "Welcome to Root server"




@app.route('/api/v1/predict', methods=['POST'])
def predict():
    print("Predicting-------->>> Please Wait")

    try:
         uploaded_file = request.files['image']
         upload_folder = "./Input/"

         if not os.path.exists(upload_folder):
                os.makedirs(upload_folder)

         if uploaded_file.filename != '':
                filename = uploaded_file.filename
                file_path = os.path.join(upload_folder, filename)
                uploaded_file.save(file_path)
                
                print("File Saved into the ./Input/ folder")
 
    except exception as e:
         return jsonify({"error": "No image provided"})
    
    # for file in request.files.getlist("photos"):
    #      try:
    #          filename = file.filename
    #          print(filename)
    #      except Exception as e:
    #         print(e)
    #         print("File Fetch Error")
    
    print("------------------->>>>> Saavdhaan ### Now Enterinh with the model ------------------->>>>>")
    reconstructed_model=tf.keras.models.load_model("./model.keras")
    # Run the trained model on a few examples from the test set
    # test_dataset = tf.data.Dataset.list_files("./*.jpg")

    

    test_dataset = tf.data.Dataset.list_files("./Input/*.jpg")
    test_dataset = test_dataset.map(model_functions.load_image_test)
    test_dataset = test_dataset.batch(model_functions.BATCH_SIZE)

    for example_input in test_dataset.take(1):
            index=5
            model_functions.generate_images(reconstructed_model, example_input,1)
            
            container_client.upload_blob(name=container_name+str(index) , data=open("./predictions/predicted1.jpg", "rb").read()) # upload the image to the container in the storage account            
            
            blob_url = f"https://{blob_service_client.account_name}.blob.core.windows.net/{container_name}/{container_name+str(index)}"
            index=index+1

    print("Prediction is successfully saveed in the Azure-blob-storage")
    

    return jsonify({"blob_url" : blob_url})


# @app.route('/route', methods=['GET', 'POST'])
# def index():
#     if request.method == 'POST':
#         if 'image' not in request.files:
#             return jsonify({"error": "No image provided"})
        
#         image_file = request.files['image']

#         if image_file.filename == '':
#             return jsonify({"error": "No selected file"})

#         if image_file and allowed_file(image_file.filename):
#             input_path = os.path.join(app.config['UPLOAD_FOLDER'], image_file.filename)
#             output_path = os.path.join(app.config['RESULT_FOLDER'], image_file.filename)

#             image_file.save(input_path)

#             # Apply the Pix2Pix model to generate the result
#             model.generate(input_path, output_path)

#             return jsonify({"result": output_path})
#         else:
#             return jsonify({"error": "Invalid file format. Supported formats: png, jpg, jpeg"})
    
#     return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)